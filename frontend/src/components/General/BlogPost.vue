<script>
export default {
  props: ['title'],
  emot: ['enlarge-text']
}
</script>

<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <v-btn @click="$emit('enlarge-text')">Enlarge text</v-btn>
  </div>
</template>