<template>

  <div>
    <MainHeader />

    <h1>Blog</h1>
    <NuxtLink to="/">Home page</NuxtLink>

    <MainFooter />
  </div>

</template>

<script>

export default {

  data() {
    return {
      title: 'Blog'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'blog page description'
        }
      ]
    }
  }

}

</script>
