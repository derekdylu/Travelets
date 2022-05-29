import { shallowMount } from '@vue/test-utils'
import ProgressBar from '@/components/General/ProgressBar.vue'

describe('ProgressBar.vue', () => {

  it('show text of button in progress bar', () => {
    const text = 'NEXT';
    const wrapper = shallowMount(ProgressBar, {
        propsData: {
            primaryButton: 'NEXT'
        }
    });
    expect(wrapper.text()).toMatch(text);
``});

  it('click on button to trigger event', async () => {
    const wrapper = shallowMount(ProgressBar)

    wrapper.vm.$emit('foo')
    wrapper.vm.$emit('foo', 123)

    await wrapper.vm.$nextTick() // Wait until $emits have been handled

    /*
    wrapper.emitted() returns the following object:
    {
        foo: [[], [123]]
    }
    */

    // assert event has been emitted
    expect(wrapper.emitted().foo).toBeTruthy()

    // assert event count
    expect(wrapper.emitted().foo.length).toBe(2)

    // assert event payload
    expect(wrapper.emitted().foo[1]).toEqual([123])
  });

});
