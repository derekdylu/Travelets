import { shallowMount } from '@vue/test-utils'
import ScheduleUnit from '@/components/AddNotes/ScheduleUnit.vue'

describe('ScheduleUnit.vue', () => {
  it('renders attractions', () => {
    const attr = ''
    const wrapper = shallowMount(ScheduleUnit);  
    const wrapper_get = wrapper.find('.place');
    expect(wrapper_get.text()).toMatch(attr)
  });
  it('should have only one note_card', () => {
    const wrapper = shallowMount(ScheduleUnit);  
    expect(wrapper.findAll('.note_card')).toHaveLength(1);
  })
});
