<template>
  <div id="app">
    <Header />
    <div id="nav">
      <div>
        <router-link to="/"><img src="./assets/Home.svg" alt=""></router-link>
      </div>
      <div>
        <router-link to="/omdb"><img src="./assets/Search.svg" alt=""></router-link>
      </div>
      <div>
        <router-link to="/favourites"><img src="./assets/HeartBold.svg" alt=""></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px 5px;
  position: fixed;
  z-index: 999;
  bottom: 0;
  background-color: #f7f7f7;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  border-top: lightgray solid 2px;

  div {
    width: 33.333%;
  }

  a {

    &.router-link-exact-active > *{
      transform: scale(1.8);
    }
  }
}

hr {
  border: 1px solid lightgray;
  width: 90%;
  margin: 22px 0;
}
</style>
