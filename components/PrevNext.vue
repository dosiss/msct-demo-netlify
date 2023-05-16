<template>
  <div class="pagination__wrap">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="pagination-item pagination-prev"
    >
    <img :src="`../../images/${prev.img}`" alt="" />
    <div class="pagination-date">{{ formatDate(prev.archiveDate) }}</div>
    <div class="pagination-heading">{{ prev.title }}</div>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="pagination-item pagination-next "
    >
    <img :src="`../../images/${next.img}`" alt="" />
    <div class="pagination-date">{{ formatDate(next.archiveDate) }}</div>
    <div class="pagination-heading">{{ next.title }}</div>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>
<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    },

    methods: {

     formatDate(date) {
       const options = { year: 'numeric', month: 'short', day: 'numeric' }
       return new Date(date).toLocaleDateString('en', options)
     },

   }
  }
</script>
<style lang="scss" scoped>
.pagination__wrap {
  display: flex;
  justify-content: space-between;
  .pagination-item {
    flex: 0 1 48%;
    img {
      height: auto;
      max-width: 100%;
      border-radius: 12px
    }
    .pagination-date {
      font-size: .97rem;
      color: #818181;
      margin: 10px 0;
    }
    .pagination-heading {
      font-size: 1.25rem
    }
  }
}

</style>
