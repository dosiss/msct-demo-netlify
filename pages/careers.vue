<template>

  <div>
    <MainHeader />

    <h1>Careers</h1>
    <NuxtLink to="/">Home page</NuxtLink>

    <MainFooter />
  </div>

</template>

<script>

export default {

  data() {
    return {
      title: 'Careers'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'careers page description'
        }
      ]
    }
  }

}

</script>
