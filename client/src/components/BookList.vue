<template>
  <div class="container">
    <Loader />
    <div class="book-container">
      <div class="book-list">
        <div class="book-card" v-for="book in bookList" :key="book">
          <Book :book="book" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Book from "./Book.vue";
import Loader from "./Loader.vue";
export default {
  components: {
    Book,
    Loader,
  },
  computed: {
    bookList() {
      return this.$store.getters.getBookList;
    },
  },
};
</script>

<style lang="scss">
.book-container {
  max-width: 1200px;
  margin: 0 auto;
  animation: 2s ease fadeIn;
  & .book-list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & .book-card {
      background: $text;
      color: $darkText;
      //  background: transparent;
      //  color: $text;
      flex: 0 1 calc(50% - 1em);
      border-radius: 80px 80px 0 80px;
      border: 1px dashed $darkText;
      padding: 40px;
      box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.05);
      transform: translate(0, -1px);
      transition: 0.2s;
      margin: 10px 0;
      &:hover {
        transition: 0.2s;
        transform: translate(0, 1px);
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .book-container {
    max-width: 700px;
    & .book-list {
      margin-top: 30px;
      justify-content: center;
      align-items: center;
      & .book-card {
        flex: 0 1 calc(100% - 1em);
      }
    }
  }
}
</style>