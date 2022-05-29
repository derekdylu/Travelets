import { mount } from '@vue/test-utils'
import PopupEdit from '@/components/AddNotes/PopupEdit.vue'

describe('PopupEdit.vue', () => {
  it('renders props.msg when passed', () => {
    const dialog = 'true'
    const wrapper = mount(PopupEdit, {
      props: { dialog }
    })
    expect(wrapper.text()).toMatch(dialog)
  })
})
