<template>
  <div class="header">
    <h1>🎬 Moviepedia</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  padding: 5%;
  background-color: #42b983;

  h1 {
    color: whitesmoke;
    font-size: 2.5rem;
    font: "Nunito";
  }
}
</style>
