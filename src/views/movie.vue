<template>
  <div class="movieDetail">
    <h2>{{ fetched.Title }}</h2>
    <img :src="fetched.Poster" alt="Movie Poster" v-if="fetched.Poster" />
    <p v-if="fetched.Plot">
      <strong> Plot: </strong> <small> {{ fetched.Plot }} </small>
    </p>
    <p v-else>There is no plot.</p>
    <p v-if="fetched.Genre">
      <strong> Genres: </strong> <small> {{ fetched.Genre }} </small>
    </p>
  </div>
</template>

// --------------------------------------------------------

<script>
export default {
  name: "Movie",
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      fetched: {},
    };
  },
  created() {
    this.moviefetch();
  },
  props: {},
  computed: {},
  methods: {
    async moviefetch() {
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
  },
};
</script>

// --------------------------------------------------------

<style lang='scss' scoped>
</style>