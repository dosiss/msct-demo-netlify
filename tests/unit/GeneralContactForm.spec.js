import { shallowMount } from '@vue/test-utils';
import ContactModal from '@/components/frontpage/ContactModal.vue';

const createWrapper = () => {
  return shallowMount(ContactModal, {
    stubs: {
      // no child components here
    },
    mocks: {
      $t: (s) => s,
      $axios: { post: jest.fn().mockResolvedValue({}) }
    }
  });
};

describe('ContactModal', () => {
  beforeEach(() => {
    // mock globals used in logic
    global.window = global.window || {};
    global.window.alert = jest.fn();
    global.window.dataLayer = { push: jest.fn() };
    global.sessionStorage = {
      getItem: jest.fn(),
      setItem: jest.fn()
    };
    global.document = global.document || { referrer: '' };
  });


  it('submits successfully on valid form and calls Google Sheet when subscribed', async () => {
    // Stub generateCaptcha to avoid canvas work during mount (not asserting on it)
    const genSpy = jest.spyOn(ContactModal.methods, 'generateCaptcha').mockImplementation(() => {});

    const wrapper = createWrapper();
    const axiosPost = wrapper.vm.$axios.post;
    const sendSheetSpy = jest.spyOn(wrapper.vm, 'sendToGoogleSheet').mockResolvedValue();

    await wrapper.setData({
      name: 'Jane',
      email: 'jane@example.com',
      phone: '555',
      message: 'Hello',
      // Keep these equal to satisfy component preconditions, but we do not assert CAPTCHA behavior
      captchaCode: 'ABC123',
      captchaInput: 'ABC123',
      subscribe: true
    });

    const form = wrapper.find('form.contact-form');
    await form.trigger('submit.prevent');
    await new Promise((r) => setTimeout(r, 0)); // flush async

    expect(axiosPost).toHaveBeenCalledWith(
      'https://api.emailjs.com/api/v1.0/email/send-form',
      expect.any(FormData),
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    expect(wrapper.vm.success).toBe(true);
    expect(wrapper.vm.errored).toBe(false);
    expect(wrapper.vm.loading).toBe(false);
    expect(sendSheetSpy).toHaveBeenCalled();
    expect(window.dataLayer.push).toHaveBeenCalled();

    genSpy.mockRestore();
  });
});
