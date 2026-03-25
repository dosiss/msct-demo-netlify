<template>
  <h2
    :data-unique-id="uniqueId"
    @click="copyToClipboard"
  >
    <slot>{{ title }}</slot>
  </h2>
</template>

<script>
export default {
  name: 'CopyableHeader',
  props: {
    uniqueId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    domain: {
      type: String,
      default: ''
    }
  },
  methods: {
    async copyToClipboard() {
      const url = `${this.$config.currURL}/marketing-tools/#${this.uniqueId}`;

      try {
        await navigator.clipboard.writeText(url);
        this.$emit('copy-success', url);
//        console.log('URL copied to clipboard:', url);
      } catch (error) {
//        console.error('Failed to copy URL:', error);
        this.$emit('copy-error', error);
      }
    }
  }
}
</script>
