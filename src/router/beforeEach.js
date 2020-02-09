import store from '../store'

export default async (to, from, next) => {
    document.title = to.name

    if (to.name !== 'login' && !store.getters['auth/hasToken']) {
        try {
            await store.dispatch('auth/ActionCheckToken')

            next({ path: to.path })
        } catch (error) {
            next({ name: 'login' })
        }
    } else {
        //impede o usuário de acessar o login quando já está logado
        if (to.name === 'login' && store.getters['auth/hasToken']) {
            next({ name: 'home' })
        } else {
            next()
        }
    }
}