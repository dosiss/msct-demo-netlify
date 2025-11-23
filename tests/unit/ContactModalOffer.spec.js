import { mount } from '@vue/test-utils';
import ContactModal from '@/components/frontpage/ContactModalOffer.vue';

// Helper function to create i18n mock
const createI18nMock = () => ({
  $t: (key) => key,
  $tc: (key, count) => key,
  $te: (key) => true,
  $i18n: {
    locale: 'en',
    fallbackLocale: 'en',
    messages: {}
  }
});

describe('ContactModal.vue - Form Submission', () => {
  let wrapper;
  let mockAxios;

  beforeEach(() => {
    mockAxios = {
      post: jest.fn(() => Promise.resolve({ data: {} }))
    };

    global.sessionStorage = {
      getItem: jest.fn(),
      setItem: jest.fn()
    };

    delete window.location;
    window.location = {
      href: 'https://example.com/contact',
      hostname: 'example.com',
      search: ''
    };

    Object.defineProperty(document, 'referrer', {
      value: 'https://google.com',
      writable: true,
      configurable: true
    });

    window.dataLayer = [];

    // Mock HTMLCanvasElement.prototype.getContext before mounting
    HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
      clearRect: jest.fn(),
      drawImage: jest.fn(),
      fillText: jest.fn()
    }));

    wrapper = mount(ContactModal, {
      mocks: {
        $axios: mockAxios,
        ...createI18nMock()
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
    jest.clearAllMocks();
  });

  it('should successfully submit form with valid data', async () => {
    // Set matching CAPTCHA to bypass validation
    wrapper.vm.captchaCode = 'ABC123';

    wrapper.setData({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      message: 'Test message',
      captchaInput: 'ABC123'
    });

    await wrapper.vm.sendMessage();

    expect(wrapper.vm.success).toBe(true);
    expect(wrapper.vm.errored).toBe(false);
    expect(wrapper.vm.loading).toBe(false);
    expect(mockAxios.post).toHaveBeenCalled();
  });

  it('should set errored state when email submission fails', async () => {
    mockAxios.post.mockRejectedValueOnce(new Error('API Error'));

    // Set matching CAPTCHA to bypass validation
    wrapper.vm.captchaCode = 'TEST12';

    wrapper.setData({
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1111111111',
      message: 'Test',
      captchaInput: 'TEST12'
    });

    await wrapper.vm.sendMessage();

    expect(wrapper.vm.errored).toBe(true);
    expect(wrapper.vm.success).toBe(false);
    expect(wrapper.vm.loading).toBe(false);
  });
});
