<template>
  <div>
    <!-- <FilterModal
      @close="handleFilters"
      :flag="modalFlag"
      @filterProp="applyFilters"
    /> -->
    <div class="Favourites" v-if="!modalFlag">
      <h2>Favorite movies & TV shows</h2>
      <hr>
      <div class="filterBox">
        <p>Filters</p>
        <img
          @click="handleFilters"
          src="../assets/Filter2.svg"
          alt="Filter icon"
        />
      </div>

      <hr />

      <div v-if="!filtered[0]">
        <h3
          v-for="item in favs"
          :key="item.imdbID"
          @click="movieDetail(item.imdbID)"
          :role="item.imdbID"
        >
          {{ item.Title }}
        </h3>
      </div>

      <div v-else>
        <h3
          v-for="item in filtered"
          :key="item.imdbID"
          @click="movieDetail(item.imdbID)"
        >
          {{ item.Title }}
        </h3>
      </div>
    </div>
  </div>
</template>

// --------------------------------------------------------

<script>
import { mapState, mapActions } from "vuex";
import FilterModal from "../components/FilterModal.vue";

export default {
  name: "Favourites",

  components: {
    FilterModal,
  },

  data() {
    return {
      modalFlag: false,
      filtered: [],
    };
  },

  created() {
    this.favsLoadAction();
  },

  props: {},

  computed: {
    ...mapState(["favs"]),
  },

  methods: {
    ...mapActions(["favsLoadAction"]),

    movieDetail(id) {
      this.$router.push(`/movie/${id}`);
    },

    handleFilters() {
      this.modalFlag = !this.modalFlag;
    },

    applyFilters(format, genre, score) {
      if (format === "" && genre === "") {
        this.filtered = this.favs.filter(
          (e) => Number(e.Ratings[0].Value.slice(0, -3)) > score
        );
      } else if (format === "" && genre !== "") {
        this.filtered = this.favs.filter(
          (e) =>
            e.Genre.includes(genre) &&
            Number(e.Ratings[0].Value.slice(0, -3)) > score
        );
      } else if (format !== "" && genre === "") {
        this.filtered = this.favs.filter(
          (e) =>
            e.Type == format && Number(e.Ratings[0].Value.slice(0, -3)) > score
        );
      } else {
        this.filtered = this.favs.filter(
          (e) =>
            e.Type == format &&
            e.Genre.includes(genre) &&
            Number(e.Ratings[0].Value.slice(0, -3)) > score
        );
      }
    },
  },
};
</script>

// --------------------------------------------------------

<style lang='scss' scoped>
div.Favourites {
  padding: 30px 0 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  div.filterBox {
    width: 85%;
    display: flex;
    justify-content: space-between;
  }

  h3 {
    margin-bottom: 22px;
  }
}
</style>