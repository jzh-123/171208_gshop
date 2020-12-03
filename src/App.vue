<template>
  <div id="app">
      <router-view/>
      <FootGuide v-show="$route.meta.showFooterr"/>
  </div>
</template>

<script>
import FootGuide from "./components/FootGuide/FootGuide";
export default {
  components: {
    FootGuide
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .app
    width: 100%
    height: 100%
    background: #f5f5f5
</style>
