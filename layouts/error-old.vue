<template>
  <div id="page404">
    <div class="numbers-big">404</div>
    <p>The page you're looking for doesn't exist</p>
    <NuxtLink to="/">Return to Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'default',

  head() {
    return {
      title: 'Page not found - Mascot Games',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  }

};
</script>
<style lang="scss">
  #page404 {
    text-align: center;
    min-height: 100vh;
    padding-top: 30vh;
    .numbers-big {
      font-size: 5rem;
      margin-bottom: 40px;
    }
    a {
      display: block;
      color: #219CF6;
      border-bottom: 1px solid #219CF6;
      max-width: fit-content;
      margin: 20px auto;
      cursor: pointer
    }
  }
</style>
