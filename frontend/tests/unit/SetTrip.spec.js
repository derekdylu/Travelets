import { mount } from '@vue/test-utils'
import SetTrip from '@/components/Setup/SetTrip.vue'

describe('SetTrip.vue', () => {
  it('should have 5 forms', () => {
    const wrapper = mount(SetTrip);  
    expect(wrapper.findAll('.form-control label')).toHaveLength(5);
  });
});
