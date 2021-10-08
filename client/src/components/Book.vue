<template>
  <div class="book-top">
    <div style="display: flex; justify-content: space-between">
      <div style="display: flex; flex-direction: column">
        <h1 class="book-title">{{ book.title }}</h1>
        <h2 class="book-author">{{ book.author }}</h2>
      </div>
      <a href="#">
        <img
          class="delete-icon"
          src="@/assets/images/delete.png"
          alt="delete-icon"
          title="Delete"
        />
      </a>
    </div>
    <div class="book-top-info">
      <span><b>Type: </b> {{ book.type }} </span>
      <span><b>Page:</b> {{ book.pageCount }}</span>
      <span
        ><b>Category: </b>
        <span
          v-for="category in book.categories"
          :key="category"
          class="category-item"
        >
          {{ category }}</span
        >
      </span>
    </div>
    <p class="book-top-description">{{ book.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.book-top {
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
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    & .category-item + .category-item:before {
      content: ", ";
    }
  }
  &-description {
    margin-top: 15px;
    font-size: 1.2em;
  }
}
</style>