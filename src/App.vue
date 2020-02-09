<template>
  <div id="app">
    <navbar v-if="showNavbar" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'

export default {
  components: {
    Navbar
  },
  computed: {
    showNavbar() {
      return this.$route.name !== 'home' && this.$route.name !== 'login'
    }
  }
}
</script>

<style lang="scss">
</style>
