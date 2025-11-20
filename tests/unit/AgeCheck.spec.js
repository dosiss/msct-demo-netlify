import { mount } from '@vue/test-utils';
import AgeCheck from '@/components/AgeCheck.vue';

describe('AgeCheck.vue', () => {
  const tMock = (s) => s;

  it('emits age-verified when "I am over the age of 18" is clicked', async () => {
    const wrapper = mount(AgeCheck, {
      mocks: { $t: tMock }
    });

    const buttons = wrapper.findAll('button');
    await buttons.at(1).trigger('click');

    expect(wrapper.emitted('age-verified')).toBeTruthy();
  });

  it('shows warning when "I am under the age of 18" is clicked', async () => {
    const wrapper = mount(AgeCheck, {
      mocks: { $t: tMock }
    });

    const underBtn = wrapper.find('.buttn-grey');
    await underBtn.trigger('click');

    expect(wrapper.vm.checkText).toBe(false);
    expect(wrapper.find('p.text-warning').exists()).toBe(true);
  });
});
