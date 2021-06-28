<template>
  <div class="filterModal" :id="flag">
    <div class="iconBox">
      <h3>Search filters</h3>
      <img src="../assets/Close.svg" @click="$emit('close')" />
    </div>
    <div class="filtersBox">
      <div>
        <label for="formatID">Format</label>
        <select v-model="format" name="format" id="formatID">
          <option value="">BOTH</option>
          <option value="movie">Movies</option>
          <option value="series">TV Shows</option>
        </select>

        <label for="genreID">Genre</label>
        <select v-model="genre" name="genre" id="genreID">
          <option value="">ANY</option>
          <option value="Action">Action</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
          <option value="Thriller">Thriller</option>
          <option value="Animation">Animation</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Comedy">Comedy</option>
          <option value="Documentary">Documentary</option>
        </select>

        <label for="ratingID">IMDB rating</label>
        <select v-model.number="rating" name="rating" id="ratingID">
          <option value="0">ANY</option>
          <option value="9">9/10 at least</option>
          <option value="8.5">8.5/10 at least</option>
          <option value="8">8/10 at least</option>
          <option value="7.5">7.5/10 at least</option>
        </select>
      </div>
      <div class="btnBox">
        <button @click="applyFilters">Apply!</button>
      </div>
    </div>
  </div>
</template>

// --------------------------------------------------------

<script>
export default {
  name: "FilterModal",
  components: {},
  data() {
    return {
      format: "",
      genre: "",
      rating: 0,
    };
  },
  props: {
    close: Function,
    filterProp: Function,
    flag: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  methods: {
    applyFilters() {
      this.$emit("filterProp", this.format, this.genre, this.rating);
      this.format = "";
      this.genre = "";
      this.$emit("close");
    },
  },
};
</script>

// --------------------------------------------------------

<style lang='scss' scoped>
div.filterModal {
  position: absolute;
  z-index: 999;
  height: 76.5vh;
  width: 100%;
  background-color: #42b983;
  opacity: 0.98;
  color: #fff;
  top: 100px;
  left: -100%;
  transition: left 0.7s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  div.iconBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 30px;
    width: 100%;
    height: 15%;
  }

  div.filtersBox {
    height: 85%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 30px;

    div {
      height: 80%;
      display: flex;
      flex-direction: column;
      align-items: start;

      label {
        margin-bottom: 5px;
      }

      select {
        margin-bottom: 20px;
        width: 150px;
      }
    }

    div.btnBox {
      height: 10%;
      align-items: center;

      button {
        background-color: #f5f5f5;
        color: #303030;
        padding: 5px;
        margin: 0 5px;
        font: inherit;
        border: none;
        line-height: 1.5;
        width: 100%;

        &:hover {
          background-color: #f9f9f9;
          transform: scale(1.05);
        }
      }
    }
  }
}

div.filterModal#true {
  left: 0;
}
</style>