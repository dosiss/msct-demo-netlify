<template>
  <pre>{{ articlesJson }}</pre>
</template>
<script>
export default {

  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['slug', 'img', 'archiveDate', 'heading'])
      .sortBy('archiveDate', 'desc')
      .fetch()

    return {
      articles

    }
  },

  head() {
    return {
      title: '',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
      ]
    }
 },

  data() {
    return {
      articlesJson: ''
    }
  },

   mounted() {
      const articlesJson = JSON.parse(JSON.stringify(this.articles));
      this.articlesJson = articlesJson
  }



}
</script>
