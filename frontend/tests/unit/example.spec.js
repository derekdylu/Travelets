import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello'
    const wrapper = shallowMount(HelloWorld, {
      props: { test_msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
