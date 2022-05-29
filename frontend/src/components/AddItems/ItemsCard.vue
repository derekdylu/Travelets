<template>
    <v-card
      class="pa-3 .bg-white rounded-t-xl flex-column flex-grow"
      elevation="4"
      max-height="100%"
      max-width="750px"
      min-width="300px">

      <!-- <p>trip id = {{ $store.state.trip.id }}</p> -->
      <!-- <p>trip area = {{ $store.state.trip.area }}</p> -->
      <!-- <p>trip duration = {{ $store.state.trip.duration }}</p> -->
      <!-- <v-btn @click="$store.dispatch('writeAttractions'); $store.dispatch('createNoteSlots'); $store.dispatch('createTravelTimeSlots')">writeAttractions</v-btn> -->
      <!-- <span>{{ $store.state.trip.attractions }}</span> -->
    
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

            <v-row align="center" spacing="10">

            <v-text-field
            v-model="serchField"
            label="Search"
            variant="underlined"
            color="primary"
            clearable
            class="mt-1"
            ></v-text-field>

            <v-dialog
              v-model="dialogAdd"
            >
              <template v-slot:activator="{ props }">
                <v-btn icon flat v-bind="props">
                  <v-icon icon="edit_calendar" color="secondary" />
                </v-btn>
              </template>
              <v-card width="338">
                <div class="ma-5">
                  <v-select
                    :items="days"
                    label="Items will be add to "
                    v-model="addDay"
                  ></v-select>
                </div>
              </v-card>
            </v-dialog>

            </v-row>

            <v-list density="compact">
              <v-list-subheader>{{ $store.state.selectedItems.length - $store.state.trip.duration }} selected, tap to add to {{ addDay }}</v-list-subheader>
              <v-list-item
                v-for="(item, i) in showingItems"
                :key="i"
                :value="item"
                active-color="primary"
                class="pa-0"
                @click="selectItem(item, addDay)"
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

            <v-timeline side="end" align="start" density="comfortable">

              <template v-for="item in $store.state.selectedItems">

                <v-timeline-item
                  v-if="item.dayDivider===true"
                  :key="item.text"
                  dot-color="white"
                  size="small"
                  width="286px"
                  fill-dot
                  hide-opposite
                >
                  <div class="d-flex justify-space-between flex-grow-1">
                    <div class="pb-3">
                      {{ item.text }}
                    </div>
                  </div>
                </v-timeline-item>

                <v-timeline-item
                  v-else
                  :key="item.id"
                  dot-color="secondary"
                  size="20px"
                  width="95%"
                  fill-dot
                  hide-opposite
                >
                  <div class="d-flex justify-space-between flex-grow-1">
                    <div>
                      {{ item.text }}
                    </div>
                    <div class="flex-shrink-0">
                      <v-btn-toggle>
                        <v-icon icon="more_horiz" color="secondary" />
                        <v-menu activator="parent" anchor="bottom end" origin="auto">
                          <v-list density="compact" class="rounded-lg">

                            <v-list-item @click="$store.dispatch('moveUpItem', $store.state.selectedItems.findIndex(x => x.id === item.id.toString()) )">
                              <v-list-item-avatar start>
                                <v-icon icon="arrow_upward" />
                              </v-list-item-avatar>
                              <v-list-item-title>Move up</v-list-item-title>
                            </v-list-item>

                            <v-list-item @click="$store.dispatch('moveDownItem', $store.state.selectedItems.findIndex(x => x.id === item.id.toString()) )">
                              <v-list-item-avatar start>
                                <v-icon icon="arrow_downward" />
                              </v-list-item-avatar>
                              <v-list-item-title>Move down</v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                              <v-list-item-avatar start>
                                <v-icon icon="how_to_vote" />
                              </v-list-item-avatar>
                              <v-list-item-title>Create a poll with ...</v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                              <v-list-item-avatar start>
                                <v-icon icon="event" />
                              </v-list-item-avatar>
                              <v-list-item-title>Move to day ...</v-list-item-title>
                              
                            </v-list-item>

                            <!-- <v-dialog
                              v-model="dialog"
                              persistent
                            >
                              <template v-slot:activator="{ props }">
                                <v-list-item v-bind="props">
                                  <v-list-item-avatar start>
                                    <v-icon icon="event" />
                                  </v-list-item-avatar>
                                  <v-list-item-title>Move to day ...</v-list-item-title>
                                </v-list-item>
                              </template>
                              
                              <v-card width="338">

                                <div class="ma-5">
                                  <v-select
                                    :items="days"
                                    label="Move to day ..."
                                    v-model="moveDay"
                                  ></v-select>
                                  <span>Moving this to {{ moveDay }}</span>
                                </div>
                                
                                <v-card-actions class="justify-end">
                                  <v-btn
                                    color="secondary"
                                    text
                                    @click="dialog = false"
                                  >
                                    Close
                                  </v-btn>
                                  <v-btn
                                    color="primary"
                                    text
                                    @click="moveItem(item.id, moveDay)"
                                  >
                                    Move
                                  </v-btn>
                                </v-card-actions>

                              </v-card>

                            </v-dialog> -->

                            <v-list-item @click="$store.dispatch('removeItem', 
                                                                  $store.state.selectedItems.findIndex( 
                                                                    x => x.id === item.id.toString()) )">
                              <v-list-item-avatar start>
                                <v-icon icon="delete" />
                              </v-list-item-avatar>
                              <v-list-item-title>Delete</v-list-item-title>
                            </v-list-item>

                          </v-list>
                        </v-menu>
                      </v-btn-toggle>
                    </div>
                  </div>
                </v-timeline-item>

              </template>

            </v-timeline>

          </v-col>
        </v-window-item>
        
      </v-window>
    
    </v-card>

</template>

<script>
  import mock1 from "./mock1.json"
  

  export default {
    data () {
      return {
        results: "",
        tab: null,
        serchField: "",
        dialog: false,
        dialogAdd: false,
        items: [],
        showingItems: [],
        days: [],
        moveDay: "",
        addDay: "",
        tests: ['a', 'b', 'c'],
      }
    },
    watch: {
      serchField: {
        handler() {
          this.filterItems()
        },
      },
      dialog: {
        handler() {
          console.log("dialog", this.dialog)
        }
      }
    },
    methods: {
      writeDays(){
        for (var i = 1; i < this.$store.state.trip.duration + 1; i++){
          var tmp = "DAY" + i
          this.days.push(tmp)
        }
        console.log(this.days)
        this.addDay = this.days.at(0)
        this.moveDay = this.days.at(0)
      },
      selectItem(obj, d){
        this.$store.dispatch('selectItem', {obj: obj, day: d})
        this.$store.dispatch('updateCurPos', {lat: obj.lat, lng: obj.lng})
        // this.moveItem(this.$store.state.selectedItems.length, this.addDay)
      },
      moveItem(id, d){
        console.log("id=", id, ", movedDay = ", d)
        this.$store.dispatch('moveItem', {itemId: id, day: d})
        this.dialog=false
        this.moveDay = d
      },
      async searchResultsTest(){
        // #CHECK Parse JSON into customized objects
        // var parsedResults = JSON.parse(mock1.results); // no need to parse?
        console.log(mock1.results)
        for (var i = 0; i < mock1.results.length; i++){
          this.items.push({text: mock1.results[i].name, 
                            lat: mock1.results[i].geometry.location.lat, 
                            lng: mock1.results[i].geometry.location.lng})
        }
        this.showingItems = this.items.sort(function(a, b) { return ((a.text < b.text) ? -1 : ((a.text > b.text) ? 1 : 0)); })
      },
      filterItems() {
        if (this.serchField !== ""){
          this.showingItems = this.items.filter(x => x.text.includes(this.serchField));
        } else {
          this.showingItems = this.items
        }
      }
    },
    mounted() {
      this.$store.dispatch('updateDuration')
      this.$store.dispatch('writeDuration')
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