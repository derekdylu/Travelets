import { mount } from '@vue/test-utils'
import PopupEdit from '@/components/AddNotes/PopupEdit.vue'

describe('PopupEdit.vue', () => {
  it('test click button',  async () => {
    const $store = {
      dispatch: jest.fn()
    }

    const wrapper = mount(PopupEdit, {
      global: {
        mocks: {
          $store: {
            state: {
              trip: {
                id: "",
                invited: false, 
                picture: "",
                tripname: "",
                host: "",
                location: "",
                startDate: "",
                endDate: "",
                duration: 0,
                vehicle: "car",
                status: "",
                attractions: [],
                travelTimes: [],
                notes: [],
              },
            } 
          }
        }
      }
    })

    await wrapper.find('v-btn').trigger('click')

    expect($store.dispatch).toHaveBeenCalledWith('click')

  })
  
})
