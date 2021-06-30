<template>
  <div class="omdb">
    <h2>Movie searcher</h2>

    <div class="form">
      <input v-model="movie" type="text" placeholder="Movie or TV show name" />
      <select
        v-model="format"
        name="format"
        defaultValue=""
        role="format-select"
      >
        <option value="" disabled hidden>Movie or TV show?</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
      </select>
      <button
        :disabled="isDisabled"
        @click="searchMovie"
        type="button"
        :class="isDisabled ? 'btn-disabled' : 'btn-enabled'"
        role="searchBtn"
      >
        Search
      </button>
    </div>

    <hr />
    <img
      class="spinnerGif"
      src="../assets/spinner/lupa.gif"
      v-if="loading"
      role="lupaSpinner"
    />

    <div
      v-if="fetched.Response && !loading"
      class="wrapperRes"
      role="responseWrapper"
    >
      <div
        v-for="item in fetched.Search"
        :key="item.imdbID"
        @click="movieDetail(item.imdbID)"
        class="movieCard"
      >
        <div v-if="item.Poster !== 'N/A'">
          <h4>{{ item.Title }}</h4>
          <img
            :src="item.Poster"
            :alt="item.Title + ' - Movie Poster'"
            v-if="item.Poster"
          />
          <p v-if="item.Year">
            <strong> Year: </strong>
            <small> {{ item.Year }} </small>
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="fetched.Error === 'Movie not found!' && !loading"
      class="wrapperRes"
    >
      🥺 No results found for your search. Check your spelling for errors 🔍
    </div>
  </div>
</template>

// ----------------------------------------------------------------------------------

<script>
import getMovies from "../hooks/GetMovies";
export default {
  name: "Omdb",

  components: {},

  data() {
    return {
      movie: "",
      format: "",
      fetched: {},
      loading: false,
    };
  },

  computed: {
    isDisabled() {
      return this.movie === "" || this.format === "" || this.loading
        ? true
        : false;
    },
  },

  methods: {
    searchMovie() {
      this.loading = true;
      setTimeout(async () => {
        const call = await getMovies(this.movie, this.format);
        this.fetched = call;
        this.movie = "";
        this.format = "";
        this.loading = false;
      }, 2000);
    },
    movieDetail(id) {
      this.$router.push(`/movie/${id}`);
    },
  },
};
</script>

// ----------------------------------------------------------------------------------

<style lang='scss' scoped>
div.omdb {
  padding: 30px 0 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 25px;
  }

  div.form {
    padding: 0 22px;
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      padding: 3px 3px;
      margin-bottom: 10px;
      font: inherit;
      line-height: 1.5;
    }

    input:target {
      outline: none;
    }

    button {
      background-color: #42b983;
      color: whitesmoke;
      border: none;
      padding: 5px;
      font: inherit;
      line-height: 1.5;
    }

    button:focus {
      outline: none;
    }

    button.btn-disabled {
      background-color: grey;
    }
  }

  div.movieCard {
    padding: 20px;

    h4 {
      margin-bottom: 22px;
    }

    img {
      margin-bottom: 22px;
    }

    p {
      margin-bottom: 22px;
      text-align: justify;
    }
  }
}
</style>