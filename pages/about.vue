<template>

  <div>
    <MainHeader />
    <h1>{{ title }}</h1>
    <NuxtLink to="/">Home page</NuxtLink>
    <AdBanner />
    <MainFooter />
  </div>
</template>

<script>
  export default {
    // page component definitions
    data() {
      return {
        title: 'About us'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'aubout us description'
          }
        ]
      }
    }
  }
</script>
