<template>
  <div>
    <Header />
    <BookList />
  </div>
</template>

<script>
import BookList from "../components/BookList.vue";
import Header from "../components/Header.vue";
import hasUser from "../mixins/hasUser";
export default {
  components: {
    BookList,
    Header,
  },
  mixins: [hasUser],
  mounted() {
    this.$store.dispatch("getBookList");
  },
};
</script>

<style>
</style>