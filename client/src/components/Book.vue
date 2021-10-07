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
    <p class="book-top-info">
      <span><b>Type: </b> {{ book.type }} </span>
      <span class="separator">|</span>
      <span><b>Page:</b> {{ book.pageCount }}</span>
      <span class="separator">|</span>
      <span><b>Category:</b> {{ book.category }}</span>
    </p>
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
</style>