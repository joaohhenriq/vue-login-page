<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="E-mail" v-model="form.email" />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="form.password"
            />
          </div>

          <button class="btn btn-primary w-100">Sign In</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  data: () => ({
    form: {
      email: '',
      password: '',
    }
  }),

  methods: {
    ...mapActions('auth', ['ActionDoLogin']), // params: namespaced e nome da actions
    submit() {
      this.ActionDoLogin(this.form).then(res => console.log(res.data))
    }
  }
}
</script>

<style>
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 40%;
}
</style>