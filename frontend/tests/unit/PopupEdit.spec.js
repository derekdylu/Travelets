import { mount } from '@vue/test-utils'
import PopupEdit from '@/components/AddNotes/PopupEdit.vue'

describe('PopupEdit.dialog', () => {
  it('renders data.dialog when passed', () => {
    const dialog = 'true'
    const wrapper = mount(PopupEdit, {
      props: { dialog }
    })
    expect(wrapper.text()).toMatch(dialog)
  })
})
