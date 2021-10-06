<template>
  <div class="book-container">
    <div class="book-list">
      <div class="book-card" v-for="book in bookList" :key="book">
        <Book :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import Book from "./Book.vue";
export default {
  components: {
    Book,
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
  & .book-list {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & .book-card {
      background: #fff;
      border-radius: 40px 40px 0 40px;
      flex: 0 1 calc(50% - 1em);
      padding: 40px;
      box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.05);
      transform: translate(0, -1px);
      transition: 0.2s;
      margin: 10px 0;
      &:hover {
        transition: 0.2s;
        transform: translate(0, 1px);
      }
      & .book-top {
        display: flex;
        flex-direction: column;
        & .delete-icon {
          width: 20px;
          height: 20px;
        }
        & .book-title {
          font-size: 3em;
          font-weight: 500;
        }
        & .book-author {
          font-size: 1.5em;
          font-weight: 400;
        }
        &-info {
          margin-top: 15px;
          font-size: 1.5em;
          & .separator {
            padding: 0 15px;
          }
        }
        &-description {
          margin-top: 15px;
          font-size: 1.2em;
        }
      }
    }
  }
}
</style>