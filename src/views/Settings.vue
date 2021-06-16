<template>
  <div class="settings">
    <button @click="fetchAllBands">LLAMA YA!</button>
    <button @click="postBand">POST!</button>
    <h6 v-for="item in bands" :key="item.id">{{ item.name }}</h6>
  </div>
</template>

// ----------------------------------------------------------------------------------

<script>
import Title from "@/components/Title.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Settings",

  components: {},

  data() {
    return {};
  },

  computed: {
    ...mapState(["bands"]),
  },

  methods: {
    ...mapActions(["bandAction"]),

    async fetchAllBands() {
      try {
        const call = await fetch("http://localhost:3000/bands");
        const parsed = await call.json();
        this.bandAction(parsed);
      } catch (err) {
        console.log(err);
      }
    },

    async postBand() {
      const fetchOpt = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: "the-beatles",
          name: "The Beatles",
          label: "Mushroom Pillow",
          genre: "Pop",
          activity: "1962 - 1970",
          origin: "Liverpool, UK",
          members: "John Lennon, Paul McCartney, George Harrison, Ringo Starr",
          alt_img: "",
          video: "",
        }),
      };
      try {
        const call = await fetch("http://localhost:3000/bands", fetchOpt);
        const parsed = await call.json();
        console.log(parsed);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

// ----------------------------------------------------------------------------------

<style lang="scss" scoped>

</style>
