<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <router-link to="/" tag="h1">Welcome Ceren </router-link>
      </div>
      <div class="header-right">
        <router-link to="/books" tag="button" class="btn btn-orange"
          >Books
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  &-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-left {
    animation: welcome infinite 2s ease 0s;
    & h1 {
      color: $text;
      font-size: 1.5em;
      letter-spacing: 2px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>