<template>
  <div class="container">
    <div class="header">
      <div class="header-left" v-if="currentUser">
        <router-link to="/" tag="h1"
          >Welcome {{ currentUser.name }}
        </router-link>
      </div>
      <div class="header-right">
        <router-link
          v-if="!isShowButtons"
          to="/books"
          tag="button"
          class="btn btn-orange"
          >Books
        </router-link>
        <div class="header-right-buttons" v-if="isShowButtons">
          <router-link to="/add-book" tag="a">
            <img src="../assets/images/add.png" />
          </router-link>
          <a @click="logout">
            <img src="../assets/images/logout.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isShowButtons() {
      return this.$route.name != "home";
    },
    currentUser() {
      return this.$store.state.auth.initialState.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  &-right {
    display: flex;
    align-items: center;
    &-buttons {
      & a {
        & img {
          width: 30px;
          height: 30px;
          border-radius: 20%;
          padding: 5px;
          background: $text;
          transition: 0.2s;
          &:hover {
            transition: 0.2s;
            transform: translate(1px, 0);
          }
          &:first-child {
            margin: 0 3px;
          }
        }
      }
    }
  }
  &-left {
    animation: welcome infinite 2s ease 0s;
    & h1 {
      color: $text;
      font-size: 1.5em;
      letter-spacing: 2px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>