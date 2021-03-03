<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from './components/navbar'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
<style lang="scss">
</style>
