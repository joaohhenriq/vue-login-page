<template>
  <div class="home">
    <div class="user-info">
      <h2>Hello, {{ user.name }}</h2>
      <p>Wellcome to my great app</p>
    </div>

    <div class="home-links">
      <router-link :to="{name: 'watchlist'}" class="home-link">
        <i class="material-icons md-48">playlist_play</i>
        <span>Wanna watch</span>
      </router-link>
      <a href="#" class="home-link">
        <i class="material-icons md-48">playlist_add_check</i>
        <span>Already watched</span>
      </a>
      <a href="#" class="home-link">
        <i class="material-icons md-48">dvr</i>
        <span>All series</span>
      </a>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    //pega o auth da store e permite ser usado aqui
    ...mapState('auth', ['user'])
  }
}; 
</script> 

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
.user-info {
  text-align: center;
}
.home-links {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.home-link {
  margin: 0 15px;
  flex: 0 0 25%;
  padding: 50px 0;
  transition: 0.4s;
  color: var(--white);
  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.home-link:hover {
  transform: scale(1.1);
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.home-link:first-child {
  background-color: var(--blue);
}
.home-link:nth-child(2) {
  background-color: var(--orange);
}
.home-link:last-child {
  background-color: var(--red);
}
</style>