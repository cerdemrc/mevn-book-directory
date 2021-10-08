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
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
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
}
</style>