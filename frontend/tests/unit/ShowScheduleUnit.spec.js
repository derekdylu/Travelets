import { mount } from '@vue/test-utils'
import ShowScheduleUnit from '@/components/Result/ShowScheduleUnit.vue'

describe('ShowScheduleUnit.vue', () => {
  it('renders props.show_text when passed', () => {
    const show_text = ''
    const wrapper = mount(ShowScheduleUnit);
    const text = wrapper.get('[data-test="show"]');
    expect(text.text()).toMatch(show_text)
  });
});
