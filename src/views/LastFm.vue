<template>
  <div class="recordSearcher">
    <h2>Record searcher</h2>

    <div class="form">
      <input v-model="banda" type="text" placeholder="Band name" />
      <input v-model="album" type="text" placeholder="Record name" />
      <button @click="fetchearInfo" type="button">Search</button>
    </div>

    <hr />

    <div v-if="fetched.album" class="albumCard">
      <h4>{{ fetched.album.name }} - {{ fetched.album.artist }}</h4>
      <img :src="fetched.album.image[5]['#text']" alt="Album Cover" />
      <p v-if="fetched.album.wiki && fetched.album.wiki.published">
        <small
          ><strong>Publicado:</strong> {{ fetched.album.wiki.published }}</small
        >
      </p>
      <p v-if="fetched.album.wiki && fetched.album.wiki.summary">
        {{ fetched.album.wiki.summary }}
      </p>
      <p v-else>No hay una descripción detallada de este álbum.</p>
    </div>

    <div v-else class="albumCard">
      🥺 No results found for your search. Check your spelling for errors 🔍"
    </div>
  </div>
</template>

// ----------------------------------------------------------------------------------

<script>
export default {
  name: "Albums",
  data() {
    return {
      banda: "",
      album: "",
      fetched: {},
    };
  },
  computed: {},
  methods: {
    async fetchearInfo() {
      try {
        const call = await fetch(
          `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=d1b43dcd4eb0f30c73ee09867097a62f&artist=${this.banda}&album=${this.album}&format=json`
        );
        const parsed = await call.json();
        this.fetched = parsed;
      } catch (err) {
        console.log(err);
      }
    },
  },
  components: {},
};
</script>

// ----------------------------------------------------------------------------------

<style lang='scss' scoped>
div.recordSearcher {
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
  }

  hr {
    border: 1px solid lightgray;
    width: 90%;
    margin: 22px 0;
  }

  div.albumCard {
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