<template>
  <div class="auth">
    <div class="form-wrapper">
      <h1 v-if="isLogin">Login</h1>
      <h1 v-else>Sign Up</h1>
      <div class="form-wrapper-input">
        <input v-if="!isLogin" type="text" placeholder="Name" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button v-if="isLogin" class="btn btn-gradient">LOGIN</button>
        <button v-else class="btn btn-gradient">SIGN UP</button>
      </div>
      <div v-if="isLogin" class="form-wrapper-bottom">
        <h2>Sign Up Using</h2>
        <a href="#" @click="toggleIt">SIGN UP</a>
      </div>
      <div v-else class="form-wrapper-bottom">
        <h2>Login Using</h2>
        <a href="#" @click="toggleIt">LOGIN</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
    };
  },
  methods: {
    toggleIt() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>

<style lang="scss">
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  & .form-wrapper {
    margin-top: 100px;
    width: 30%;
    padding-top: 5em;
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
        width: 150%;
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
        color: #000;
        font-weight: 500;
      }
    }
  }
}
</style>