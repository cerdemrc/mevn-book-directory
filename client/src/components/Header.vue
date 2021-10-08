<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/add-book" tag="a">
        <img src="../assets/images/add.png" />
      </router-link>
      <router-link to="/login" tag="a">
        <img src="../assets/images/logout.png" />
      </router-link>
    </div>
    <div class="header-right">
      <h1>Welcome Ceren</h1>
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
  &-left {
    display: flex;
    justify-content: center;
    align-items: center;
    & a {
      & img {
        width: 30px;
        height: 30px;
        border-radius: 20%;
        padding: 5px;
        background: $text;
        transition: 0.2s;
        &:hover {
          transition: 0.2s;
          transform: translate(1px, 0);
        }
        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }
  &-right {
    animation: welcome infinite 2s ease 0s;
    & h1 {
      color: $text;
      font-size: 1.5em;
      letter-spacing: 2px;
    }
  }
}
</style>