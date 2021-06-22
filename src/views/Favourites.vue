<template>
  <Fragment>
    <FilterModal v-if="modalFlag" />

    <div class="Favourites">
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
  </Fragment>
</template>

// --------------------------------------------------------

<script>
import { mapState, mapActions } from "vuex";
import { Fragment } from "vue-fragment";
import FilterModal from "../components/FilterModal.vue";

export default {
  name: "Favourites",

  components: {
    FilterModal,
    Fragment
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
  },
};
</script>

// --------------------------------------------------------

<style lang='scss' scoped>
div.Favourites {
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