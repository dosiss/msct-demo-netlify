<template>
  <div>
    <div class="block" id="block1">
      <div class="red-ball"></div>
      <h2>Block 1</h2>
    </div>
    <div class="block" id="block2">
      <div class="red-ball"></div>
      <h2>Block 2</h2>
    </div>
    <div class="block" id="block3">
      <div class="red-ball"></div>
      <h2>Block 3</h2>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    this.animateBlocks();
  },
  methods: {
    animateBlocks() {
      const blocks = document.querySelectorAll('.block');

      blocks.forEach(block => {
        const redBall = block.querySelector('.red-ball');

        // Initially hide the red ball
        this.$gsap.set(redBall, { x: '-100%' });

        // Create a ScrollTrigger for each block
        this.$ScrollTrigger.create({
          trigger: block,
          start: 'top bottom',
          end: 'bottom top',
          markers: true,
          onEnter: () => {
            this.$gsap.to(redBall, { x: '500px', duration: 1, ease: 'power1.out', delay: 1 });
          },

          onEnterBack: () => {
            this.$gsap.to(redBall, { x: '500px', duration: 1, ease: 'power1.out', delay: 1 });
          },

          onLeave: () => {
            this.$gsap.to(redBall, { x: '-100%', duration: 1, ease: 'power1.out' });
          },

          onLeaveBack: () => {
            this.$gsap.to(redBall, { x: '-100%', duration: 1, ease: 'power1.out' });
          },
        });
      });
    },
  },
};
</script>

<style scoped>
.block {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid #ccc;

}

.red-ball {
  position: absolute;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
}
</style>
