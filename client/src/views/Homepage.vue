<template>
  <div>
    <Header />
    <div class="container">
      <div class="home">
        <div class="home-left">
          <h1 class="home-left-title">Welcome to Book Directory!</h1>
          <p class="home-left-subtitle">
            We also
            <span class="orange-text">really</span>, really love
            <span class="yellow-text">books.</span>
          </p>
        </div>
        <div class="home-illustration">
          <img src="../assets/images/illust.png" />
        </div>
      </div>
    </div>
    <h4 class="developed">
      Developed by
      <a
        href="https://github.com/cerdemrc"
        target="blank"
        style="color: #e81224"
        >Ceren</a
      >
      with ❤️
    </h4>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Header,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  created() {
    if (!this.isLoggedIn) {
      this.$router.push("/login");
    }
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding: 0 20px;
  &-left {
    color: $text;
    &-title {
      font-size: 6em;
    }
    &-subtitle {
      font-size: 4em;
      & .orange-text {
        color: $secondary;
      }
      & .yellow-text {
        color: $yellow;
      }
    }
  }
  &-illustration img {
    width: 100%;
    height: 100%;
  }
}
.developed {
  position: fixed;
  bottom: 10px;
  right: 10px;
  letter-spacing: 1.5px;
  font-size: 1.2em;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
}

@media screen and (max-width: 768px) {
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-title {
        font-size: 4em;
      }
      &-subtitle {
        font-size: 3em;
      }
    }
    &-illustration {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px 0;
      & img {
        width: 70%;
        height: 70%;
      }
    }
  }
  .developed {
    left: 10px;
    font-size: 1.5em;
  }
}
@media screen and (max-width: 415px) {
  .home {
    &-left {
      &-title {
        font-size: 2.5em;
      }
      &-subtitle {
        font-size: 1.8em;
      }
    }
    &-illustration {
      margin-bottom: 200px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .developed {
    font-size: 1em;
  }
}
</style>