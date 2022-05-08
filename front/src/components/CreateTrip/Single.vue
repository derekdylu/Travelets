<template>
  <div>
    <Multiselect
      v-model="value"
      placeholder="Select your character"
      label="name"
      trackBy="name"
      :options="options"
      :searchable="true"
    >
      <template v-slot:singleLabel="{ value }">
        <div class="multiselect-single-label">
          <img height="26" style="margin: 0 6px 0 0;" :src="value.icon"> {{ value.name }}
        </div>
      </template>

      <template v-slot:option="{ option }">
        <img height="22" style="margin: 0 6px 0 0;" :src="option.icon">{{ option.name }}
      </template>
    </Multiselect>
  </div>
</template>

<script>
  import Multiselect from '@vueform/multiselect'

  export default {
    name: 'SingleSelect',
    components: { Multiselect },
    data() {
      return {
        value: null,
        options: [
          { value: 'captainamerica', name: 'Captain America', icon: 'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/03_-_Captain_America_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png' },
          { value: 'spiderman', name: 'Spiderman', icon: 'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/12_-_Spiderman_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png' },
          { value: 'ironman', name: 'Iron Man', icon: 'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/02_-_IRONMAN_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png' },
        ]
      }
    }
  }
</script>

<style src="@vueform/multiselect/themes/default.css"></style>