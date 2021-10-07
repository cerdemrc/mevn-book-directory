<template>
  <div>
    <Header />
    <Welcome />
    <BookList />
  </div>
</template>

<script>
import BookList from "../components/BookList.vue";
import Header from "../components/Header.vue";
import Welcome from "../components/Welcome.vue";
export default {
  components: {
    BookList,
    Header,
    Welcome,
  },
  mounted() {
    this.$store.dispatch("getBookList");
  },
};
</script>

<style>
</style>