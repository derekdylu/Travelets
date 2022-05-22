<template>
	<div>
		<ProgressBar />
		<TestComponent />
	</div>
</template>

<script>
import TestComponent from '@/components/Others/TestComponent.vue'
import ProgressBar from '@/components/General/ProgressBar.vue'

export default {
	name: 'AddView',
	components: {
		TestComponent,
		ProgressBar,
  },
	data() {
		return {
			postFontSize: 1,
			posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
		}
	},
	provide() {
		return{
			needle: this.posts[1].title
		}
	},
	method: {
		
	}
}
</script>
