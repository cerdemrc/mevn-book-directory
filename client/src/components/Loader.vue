<template>
  <div class="loading" v-if="showSpinner"></div>
</template>

<script>
export default {
  computed: {
    showSpinner() {
      return this.$store.getters.loadingStatus;
    },
  },
};
</script>

<style lang="scss">
.loading {
  display: inline-block;
  width: 80px;
  height: 80px;
  position: fixed;
  top: 48%;
  left: 48%;
  z-index: 99;
}
.loading:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid $secondary;
  border-color: $secondary transparent $secondary transparent;
  animation: loading 1.2s infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>