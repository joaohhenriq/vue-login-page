<template>
  <div class="page-serie">
    <div style="font-size: 1.3rem" v-if="loading">Please, wait...</div>
    <template v-else>
      <h1>{{serie.title}}</h1>
      <img :src="serie.image" height="400px" alt="Poster" loading="lazy" />
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({ loading: true }),
  mounted() {
    this.getData()
  },
  computed: {
    ...mapState('showSerie', ['serie'])
  },
  methods: {
    ...mapActions('showSerie', ['ActionFindSerie']),
    async getData() {
      try {
        await this.ActionFindSerie(this.$route.params.id)
      } catch (error) {
        alert('Failed!!')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style>
.page-serie {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(
    100vh - 56px
  ); /* 56px da navbar, para ver altura basta inspecionar o elemento */
}
</style>