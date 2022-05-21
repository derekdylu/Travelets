<template>
	<div>
		<ProgressBar />
		<TestComponent />
		<div :style="{ fontSize: postFontSize + 'em' }">
			<BlogPost
				v-for="post in posts"
				:key="post.id"
				:title="post.title"
				@enlarge-text="postFontSize += 0.1"
			></BlogPost>
		</div>
	</div>
</template>

<script>
import TestComponent from '@/components/Others/TestComponent.vue'
import ProgressBar from '@/components/General/ProgressBar.vue'

import BlogPost from '@/components/General/BlogPost.vue'

export default {
	name: 'AddView',
	components: {
		TestComponent,
		ProgressBar,
		BlogPost,
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
