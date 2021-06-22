<template>
  <div class="movieDetail">
    <h2>{{ fetched.Title }}</h2>

    <img
      :src="fetched.Poster"
      :alt="fetched.Title + ' - Movie Poster'"
      v-if="fetched.Poster"
    />

    <p v-if="fetched.Released">
      <strong> Released: </strong>
      <small> {{ fetched.Released }} </small>
    </p>

    <p v-if="fetched.Director">
      <strong> Director: </strong>
      <small> {{ fetched.Director }} </small>
    </p>

    <p v-if="fetched.Plot">
      <strong> Plot: </strong>
      <small> {{ fetched.Plot }} </small>
    </p>

    <p v-if="fetched.Genre">
      <strong> Genres: </strong>
      <small> {{ fetched.Genre }} </small>
    </p>

    <button v-if="checkFav" @click="favDeleteAction(fetched.imdbID)">
      Borrar
    </button>
    <button v-else @click="saveFav(fetched, fetched.imdbID)">Guardar</button>
  </div>
</template>

// --------------------------------------------------------

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Movie",

  components: {},

  data() {
    return {
      fetched: {},
    };
  },

  created() {
    this.movieFetch();
    this.favsLoadAction();
  },

  props: {},

  computed: {
    ...mapState(["favs"]),

    checkFav() {
      return this.favs.find((el) => el.imdbID === this.fetched.imdbID);
    },
  },

  methods: {
    ...mapActions(["favsLoadAction", "favDeleteAction"]),

    async movieFetch() {
      try {
        const movieCall = await fetch(
          `http://www.omdbapi.com/?i=${this.$route.params.id}&apikey=d9e992da`
        );
        const parsedMovie = await movieCall.json();
        this.fetched = parsedMovie;
      } catch (err) {
        console.log(err);
      }
    },
    async saveFav(fetched, id) {
      const fetchOpt = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...fetched, ...{ id: id } }),
      };
      try {
        const favsCall = await fetch(`http://localhost:3000/favs`, fetchOpt);
        const parsedFav = await favsCall.json();
        console.log(parsedFav);
        this.favsLoadAction();
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>

// --------------------------------------------------------

<style lang='scss' scoped>
div.movieDetail {
  padding: 0 10px 10px 10px;

  h2 {
    margin-bottom: 22px;
  }

  img {
    margin-bottom: 22px;
    border-radius: 5px;
  }

  p {
    margin-bottom: 22px;
    text-align: justify;
  }

  button {
    background-color: #303030;
    color: white;
    padding: 5px;
    margin: 0 5px;
    font: inherit;
    border: none;
    line-height: 1.5;

    &:hover {
      background-color: #404040;
      transform: scale(1.05);
    }
  }
}
</style>