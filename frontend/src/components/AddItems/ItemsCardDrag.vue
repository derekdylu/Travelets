<!-- don't use this, only for testing -->

<template>

    <v-card
      class="pa-3 .bg-white rounded-t-xl flex-column flex-grow"
      elevation="4"
      max-height="100%"
      max-width="750px"
      min-width="300px"
    >
      <v-tabs
        v-model="tab"
        center-active
        grow
        color="primary"
        class="mb-1"
      >
        <v-tab value="explore">explore</v-tab>
        <v-tab value="selected">selected</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="explore">
          <v-col
            dense
            align="start"
            align-content="start"
          >

            <v-text-field
            v-model="serchField"
            label="Search"
            variant="underlined"
            color="primary"
            clearable
            ></v-text-field>

            <v-list density="compact">
              <v-list-subheader>{{ selectedItems.length - duration }} selected, tap to add</v-list-subheader>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :value="item"
                active-color="primary"
                class="pa-0"
                @click="selectItem(item)"
              >
                <v-list-item-avatar start>
                  <v-icon icon="place" />
                </v-list-item-avatar>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item>
            </v-list>

          </v-col>
        </v-window-item>

        <v-window-item value="selected">
          <v-col
            dense
            align="start"
            align-content="start"
          >

            <draggable 
              v-model="selectedItems" 
              group="people" 
              @start="drag=true" 
              @end="drag=false" 
              item-key="id"
            >
              <template #item="{element}">
                <div>{{element.text}}</div>
              </template>
            </draggable>

          </v-col>
        </v-window-item>
        
      </v-window>
    
    </v-card>

</template>

<script>
  import JSONResults from "./test.json"
  import draggable from 'vuedraggable'

  export default {
    data () {
      return {
        drag: false,
        results: "",
        tab: null,
        serchField: "",
        dialog: false,
        selectedItems: [],
        duration: 3,
        items: [],
        days: [],
        moveDay: "",
      }
    },
    components: {
      draggable
    },
    watch: {
      serchField: {
        handler() {
          console.log('change')
        },
      },
    },
    methods: {
      selectItem(obj) {
        obj['id'] = this.selectedItems.length.toString()
        this.selectedItems.push(obj)
        console.log(this.selectedItems)
      },
      removeItem(idx) {
        console.log(idx)
        this.selectedItems.splice(idx, 1);
      },
      moveUpItem(idx) {
        if (idx > 1) {
          var tmp = this.selectedItems[idx-1];
          this.selectedItems[idx-1] = this.selectedItems[idx];
          this.selectedItems[idx] = tmp;
        }
      },
      moveDownItem(idx) {
        if (idx < this.selectedItems.length - 1){
          var tmp = this.selectedItems[idx+1];
          this.selectedItems[idx+1] = this.selectedItems[idx];
          this.selectedItems[idx] = tmp;
        }
      },
      // pollItem(a, b){

      // },
      moveItem(itemId, day){
        var itemIdx = this.selectedItems.findIndex(x => x.id === itemId.toString())
        var dayIdx = this.selectedItems.findIndex(x => x.text === day)
        var tmp = this.selectedItems[itemIdx]
        this.removeItem(itemIdx)
        this.selectedItems.splice(dayIdx+1, 0, tmp)
        this.dialog = false
      },
      returnValue(st){
        console.log(st)
      },
      writeDuration(){
        for (var i = 1; i < this.duration + 1; i++){
          var tmp = { dayDivider: true, text: "DAY" + i}
          this.selectItem(tmp) // why no push???
        }
        console.log(this.selectedItems)
      },
      writeDays(){
        for (var i = 1; i < this.duration + 1; i++){
          var tmp = "DAY" + i
          this.days.push(tmp)
        }
        console.log(this.days)
      },
      async searchResults() {
        
      },
      async searchResultsTest(){
        // var parsedResults = JSON.parse(JSONResults.results); // no need to parse?
        console.log(JSONResults.results)
        for (var i = 0; i < JSONResults.results.length; i++){
          this.items.push({text: JSONResults.results[i].name})
        }
      },
    },
    mounted() {
      this.writeDuration();
      this.searchResultsTest();
      this.writeDays();
    },
  }
</script>

<style>
/* .v-timeline-divider v-timeline-divider--fill-dot {
  padding-bottom: 0px;
} */
</style>