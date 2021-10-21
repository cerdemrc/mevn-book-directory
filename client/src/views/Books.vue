<template>
  <div>
    <Header />
    <BookList />
  </div>
</template>

<script>
import BookList from "@/components/BookList.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    BookList,
    Header,
  },
  mounted() {
    this.$store.dispatch("getBookList");
  },
};
</script>

<style>
</style>