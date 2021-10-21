<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <router-link v-if="user" to="/" tag="h1"
          >Welcome {{ user.name }}
        </router-link>
      </div>
      <div class="header-right">
        <router-link to="/books" tag="button" class="btn btn-orange"
          >Books
        </router-link>
        <router-link to="/add-book" tag="a">
          <img src="../assets/images/add.png" />
        </router-link>
        <a @click="logout" title="Logout">
          <img src="../assets/images/logout.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
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
    & button {
      margin-right: 20px;
    }
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