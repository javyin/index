<template>
  <div class="home">
      <Header></Header>
      <router-view/>
  </div>
</template>

<script>
import Header from '../components/Header';
export default {
  name: 'Home',
  components: {
      Header
  },
  data() {
      return {

      }
  },
  methods: {

  }
}
</script>

<style lang="less">
.home {
    padding-top: 8.7vw;
}
</style>