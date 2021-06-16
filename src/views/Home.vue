<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Title msg="This is your home page"/>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  name: 'Home',
  components: {
    Title
  }
}
</script>
