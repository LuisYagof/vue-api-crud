<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/omdb">Search</router-link> |
      <router-link to="/favourites">Favourites</router-link>
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

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
      text-decoration: underline;
    }
  }
}
</style>
