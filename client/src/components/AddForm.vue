<template>
  <div class="add-form">
    <div class="form-wrapper">
      <h1 class="form-title">Add a book</h1>
      <div class="input"><input type="text" placeholder="Book Title" /></div>
      <div class="input"><input type="text" placeholder="Author" /></div>
      <div class="input">
        <textarea placeholder="Description" rows="4" />
      </div>

      <div class="input"><input type="text" placeholder="Page Count" /></div>
      <div class="input"><input type="text" placeholder="Type" /></div>
      <div class="input"><input type="text" placeholder="Category" /></div>
      <div class="button-group">
        <button class="btn btn-orange">ADD</button>
        <router-link to="/books" tag="button" class="btn btn-dark"
          >CANCEL</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.add-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 2s ease fadeIn;
  & .form-wrapper {
    margin-top: 30px;
    width: 50%;
    padding-top: 2em;
    & .form-title {
      color: $darkText;
      font-size: 2.3em;
    }
    & .input {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      & input {
        padding: 5px 0;
        width: 70%;
      }
      & textarea {
        width: 70%;
        resize: none;
      }
    }
    & .button-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      & .btn {
        margin: 0.5em 0;
        width: 50%;
        padding: 6px 0;
      }
    }
  }
}
@media screen and(max-width: 768px) {
  .add-form {
    & .form-wrapper {
      width: 90%;
    }
  }
}
@media screen and(max-width: 415px) {
  .add-form {
    & .form-wrapper {
      width: 90%;
      & .button-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        & .btn {
          padding: 4px 0;
          font-size: 1.2em;
        }
      }
    }
  }
}
</style>