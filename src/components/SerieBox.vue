<template>
  <router-link :to="{name: 'show-serie', params: {id: serie.id}}" class="card">
    <img :src="serie.image" class="card-image-top" height="300px" />
    <div class="card-body">
      <h3 class="text-center mb-0">{{serie.title}}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    serie: { type: Object, required: true }
  }
}
</script>

<style>
.card {
  cursor: pointer;
  transition: 0.4s;
  color: var(--dark);
}
.card:hover {
  text-decoration: none;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.5);
}
</style>