<template>
	<ProgressBar />
	<ItemsList />
</template>

<script>
import ItemsList from '@/components/Add/ItemsList.vue'
import ProgressBar from '@/components/General/ProgressBar.vue'

export default {
	name: 'AddView',

	components: {
		ItemsList,
		ProgressBar
  },
}
</script>
