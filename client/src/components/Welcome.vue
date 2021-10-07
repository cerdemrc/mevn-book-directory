<template>
  <div class="welcome">
    <h1>Welcome Ceren</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  color: #fff;
  letter-spacing: 2px;
  animation: myAnim 2s ease 0s 1 normal forwards;
}
@keyframes myAnim {
  0% {
    transform: translate(0);
  }

  10% {
    transform: translate(-2px, -2px);
  }

  20% {
    transform: translate(2px, -2px);
  }

  30% {
    transform: translate(-2px, 2px);
  }

  40% {
    transform: translate(2px, 2px);
  }

  50% {
    transform: translate(-2px, -2px);
  }

  60% {
    transform: translate(2px, -2px);
  }

  70% {
    transform: translate(-2px, 2px);
  }

  80% {
    transform: translate(-2px, -2px);
  }

  90% {
    transform: translate(2px, -2px);
  }

  100% {
    transform: translate(0);
  }
}
</style>