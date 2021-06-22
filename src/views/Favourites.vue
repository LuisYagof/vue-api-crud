<template>
  <div class="Favourites">
    <h3
      v-for="item in favs"
      :key="item.imdbID"
      @click="movieDetail(item.imdbID)"
    >
      {{ item.Title }}
    </h3>
  </div>
</template>

// --------------------------------------------------------

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Favourites",

  components: {},

  data() {
    return {};
  },

  created() {
    this.favsLoadAction()
  },

  props: {},

  computed: {
    ...mapState(["favs"]),
  },

  methods: {
    ...mapActions(["favsLoadAction"]),

    async deleteFav(id) {
      const fetchOpt = {
        method: "DELETE",
      };
      try {
        const favsCall = await fetch(
          `http://localhost:3000/favs/${id}`,
          fetchOpt
        );
        this.favsFetch();
      } catch (err) {
        console.log(err);
      }
    },
    movieDetail(id) {
      this.$router.push(`/movie/${id}`);
    },
  },
};
</script>

// --------------------------------------------------------

<style lang='scss' scoped>
div.Favourites {
  h3 {
    margin-bottom: 22px;
  }
}
</style>