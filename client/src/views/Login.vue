<template>
  <div class="auth">
    <div class="form-wrapper">
      <h1>Login</h1>
      <p class="err-message" v-if="error">{{ error }}</p>
      <div class="form-wrapper-input">
        <input
          type="email"
          placeholder="Email"
          pattern=".+@globex\.com"
          v-model="user.email"
        />
        <input type="password" placeholder="Password" v-model="user.password" />
        <button class="btn btn-orange" @click="login">LOGIN</button>
      </div>
      <div class="form-wrapper-bottom">
        <h2>Sign Up Using</h2>
        <router-link to="/register" tag="a">SIGN UP</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters(["error"]),
  },
  methods: {
    login() {
      let user = this.user;
      this.$store
        .dispatch("login", user)
        .then(() => this.$router.push("/"))
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 2s ease fadeIn;
  & .form-wrapper {
    margin-top: 100px;
    width: 30%;
    padding-top: 5em;
    & .err-message {
      color: $secondary;
      font-size: 1.2em;
      letter-spacing: 1px;
      font-weight: 500;
    }
    & h1 {
      font-size: 2.5rem;
      padding-bottom: 1em;
      letter-spacing: 3px;
    }
    &-input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 6em;
      & input {
        margin: 10px 0;
        padding: 4px 6px;
        width: 150%;
      }
      & button {
        margin: 2em 0;
        width: 100%;
        padding: 8px 0;
        font-size: 1.3em;
        font-weight: 500;
        width: 100%;
        color: $text;
      }
    }
    &-bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 2em;
      & h2 {
        font-weight: 100;
        font-size: 1.3em;
      }
      & a {
        font-size: 1.5em;
        margin-top: 5px;
        color: $darkText;
        font-weight: 500;
      }
    }
  }
}
</style>