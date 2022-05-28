import { createStore } from 'vuex'

export default createStore({
  state: {
    test: "testing vuex",
    user: "derekdylu", // temporary
    trip: {
      id: "",
      invited: false, // temporary
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
    selectedItems: [],
  },
  mutations: {
    updateID(state, newId) {
      state.trip.id = newId
    },
    updateDuration(state) {
      var date1 = new Date(state.trip.startDate);
      var date2 = new Date(state.trip.endDate);

      var Difference_In_Time = date2.getTime() - date1.getTime();
      var Difference_In_Day = Difference_In_Time / (1000 * 3600 * 24)
      console.log(Difference_In_Day)

      state.trip.duration = Difference_In_Day + 1;
    },
    
    writeDuration(state){
      for (var i = 1; i < state.trip.duration + 1; i++){
        var tmp = { dayDivider: true, text: "DAY" + i}
        state.selectedItems.push(tmp)
      }
      console.log(state.selectedItems)
    },

    // DIV setup
    setTripname(state, newTripname) {
      state.trip.tripname = newTripname
    },
    setStartDate(state, newStartDate) {
      state.trip.startDate = newStartDate
    },
    setEndDate(state, newEndDate) {
      state.trip.endDate = newEndDate
    },
    setLocation(state, newLocation) {
      state.trip.location = newLocation
    },

    // DIV additems
    selectItem(state, payload) {
      let tmp = {text: payload.obj, id: state.selectedItems.length.toString()}
      var dayIdx = state.selectedItems.findIndex(x => x.text === payload.day)
      state.selectedItems.splice(dayIdx+1, 0, tmp)

      console.log(state.selectedItems)
    },
    removeItem(state, idx) {
      console.log(idx)
      state.selectedItems.splice(idx, 1);
    },
    moveUpItem(state, idx) {
      if (idx > 1) {
        var tmp = state.selectedItems[idx-1];
        state.selectedItems[idx-1] = state.selectedItems[idx];
        state.selectedItems[idx] = tmp;
      }
    },
    moveDownItem(state, idx) {
      if (idx < state.selectedItems.length - 1){
        var tmp = state.selectedItems[idx+1];
        state.selectedItems[idx+1] = state.selectedItems[idx];
        state.selectedItems[idx] = tmp;
      }
    },
    moveItem(state, payload){
      var itemIdx = state.selectedItems.findIndex(x => x.id === payload.itemId.toString())
      var dayIdx = state.selectedItems.findIndex(x => x.text === payload.day)
      var tmp = state.selectedItems[itemIdx]
      state.selectedItems.splice(itemIdx, 1)
      state.selectedItems.splice(dayIdx+1, 0, tmp)
    },
    
    // DIV write list of list
    // #NOTE parse selectedItems to list of list in attractions array
    writeAttractions(state) {
      let attr = []
      let flag = 1
      while (flag <= state.selectedItems.length){
          let res = []
          let div = state.selectedItems.slice(flag).findIndex( x => x.dayDivider === true )
          if (div === -1) {
              res = state.selectedItems.slice(flag)
              attr.push(res)
              break
          }else{
              div += flag
              res = state.selectedItems.slice(flag, div)
              attr.push(res)
              flag = div + 1
          }
      }
      state.trip.attractions = attr
    },

  },
  actions: {
    updateID({commit}, newId) {
      commit('updateID', newId)
    },
    updateDuration({commit}) {
      commit('updateDuration')
    },
    writeDuration({commit}) {
      commit('writeDuration')
    },

    // DIV setup
    setTripname({commit}, newTripname) {
      commit('setTripname', newTripname)
    },
    setStartDate({commit}, newStartDate) {
      commit('setStartDate', newStartDate)
    },
    setEndDate({commit}, newEndDate) {
      commit('setEndDate', newEndDate)
    },
    setLocation({commit}, newLocation) {
      commit('setLocation', newLocation)
    },

    // DIV additems
    selectItem({commit}, payload){
      commit('selectItem', payload)
    },
    removeItem({commit}, idx){
      commit('removeItem', idx)
    },
    moveUpItem({commit}, idx){
      commit('moveUpItem', idx)
    },
    moveDownItem({commit}, idx){
      commit('moveDownItem', idx)
    },
    moveItem({commit}, payload){
      commit('moveItem', payload)
    },

    // DIV write list of list
    writeAttractions({commit}){
      commit('writeAttractions')
    },

  },
  modules: {

  },

})