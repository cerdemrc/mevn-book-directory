<template>
  <div class="add-form">
    <div class="form-wrapper">
      <div class="input"><input type="text" placeholder="Book Title" /></div>
      <div class="input"><input type="text" placeholder="Author" /></div>
      <div class="input">
        <textarea placeholder="Description" rows="4" />
      </div>

      <div class="input"><input type="text" placeholder="Page Count" /></div>
      <div class="input"><input type="text" placeholder="Type" /></div>
      <div class="input"><input type="text" placeholder="Category" /></div>
      <button class="btn btn-pink">ADD</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.add-form {
  display: flex;
  justify-content: center;
  align-items: center;
  & .form-wrapper {
    margin-top: 30px;
    width: 50%;
    padding-top: 2em;
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
    & .btn {
      margin: 2em 0;
      width: 40%;
      padding: 6px 0;
    }
  }
}
</style>