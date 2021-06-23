<template>
  <div class="omdb">
    <h2>Movie searcher</h2>

    <div class="form">
      <input v-model="movie" type="text" placeholder="Movie or TV show name" />
      <select v-model="format" name="format" defaultValue="">
        <option value="" disabled hidden>Movie or TV show?</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
      </select>
      <button
        :disabled="disableBtn"
        @click="searchMovie"
        type="button"
        :class="disableClass"
      >
        Search
      </button>
    </div>

    <hr />
    <div v-if="fetched.Response" class="wrapperRes">
      <div
        v-for="item in fetched.Search"
        :key="item.imdbID"
        @click="movieDetail(item.imdbID)"
        class="movieCard"
      >
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

    <div v-if="fetched.Error === 'Movie not found!'" class="wrapperRes">
      🥺 No results found for your search. Check your spelling for errors 🔍
    </div>
  </div>
</template>

// ----------------------------------------------------------------------------------

<script>
export default {
  name: "Omdb",

  components: {},

  data() {
    return {
      movie: "",
      format: "",
      fetched: {},
    };
  },

  computed: {
    disableBtn() {
      return this.movie === "" || this.format === "" ? true : false;
    },
    disableClass() {
      return this.movie === "" || this.format === "" ? "true" : "false";
    },
  },

  methods: {
    async searchMovie() {
      try {
        const call = await fetch(
          `http://www.omdbapi.com/?s=${this.movie}&type=${this.format}&page=1&apikey=d9e992da`
        );
        const parsed = await call.json();
        this.fetched = parsed;
        this.movie = "";
        this.format = "";
      } catch (err) {
        console.log(err);
        this.movie = "";
        this.format = "";
      }
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
  padding: 30px 0 0 0;
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

    select {
      padding: 3px 3px;
      margin-bottom: 10px;
      font: inherit;
      line-height: 1.5;
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

    button.true {
      background-color: grey;
    }
  }

  div.movieCard {
    padding: 0 20px;

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