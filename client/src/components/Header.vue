<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/add-book" tag="button" class="btn btn-blue"
        >add a book</router-link
      >
    </div>
    <div class="header-right">
      <button class="btn btn-blue">logout</button>
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
}
</style>