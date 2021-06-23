
<template>
  <div class="home">
    <Title msg="Welcome to Moviepedia" />
    <hr />
    <p>In this webapp you can:</p>
    <h2>🔍 <router-link to="/omdb"> Search</router-link> for any existing movie or TV show</h2>
    <h2>⭐ <router-link to="/favourites"> Save</router-link> your favourite ones</h2>
    <h2>🧪 Filter them and move them through your custom lists</h2>
    <!-- 🧬🧷👓 -->
    <p style="position: absolute; bottom: 65px"><small>Created by Luis Yago Fernández</small></p>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  name: "Home",
  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped>
div.home {
  padding: 30px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #42b983
  }

  p {
    margin-bottom: 22px;

    small {
      font-size: 10px;
    }
  }

  h2 {
    margin-bottom: 35px;
  }
}
</style>
