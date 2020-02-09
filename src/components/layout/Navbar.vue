<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{name: 'home'}">Great app</router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <router-link
          v-for="(route, index) in routes"
          :key="index"
          :to="{name: route.name}"
          tag="li"
          exact
          exact-active-class="active"
          class="nav-item"
        >
          <a href="#" class="nav-link">{{route.meta.title}}</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    routes() {
      return this.$router.options.routes.filter(route => (
        route.meta && route.meta.showNavbar
      ))
    }
  }
}
</script>

<style>
</style>