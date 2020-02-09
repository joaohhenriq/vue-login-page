<template>
  <div>{{serie}}</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  created() {
    this.ActionFindSerie(this.$route.params.id)
  },
  computed: {
    ...mapState('showSerie', ['serie'])
  },
  methods: {
    ...mapActions('showSerie', ['ActionFindSerie'])
  }
}
</script>

<style>
</style>