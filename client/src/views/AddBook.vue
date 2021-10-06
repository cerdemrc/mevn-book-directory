<template>
  <div>
    <Header />
    <Welcome />
    <AddForm />
  </div>
</template>

<script>
import AddForm from "../components/AddForm.vue";
import Header from "../components/Header.vue";
import Welcome from "../components/Welcome.vue";
export default {
  components: {
    AddForm,
    Header,
    Welcome,
  },
};
</script>

<style lang="scss">
</style>