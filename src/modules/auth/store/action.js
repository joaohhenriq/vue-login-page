import services from '@/http'
import * as storage from '../storage'
import * as types from './mutation-types'

//dispatch serve pra chamar uma outra action aqui dentro
export const ActionDoLogin = ({ dispatch }, payload) => {
    return services.auth.login(payload).then(res => {
        dispatch('ActionSetUser', res.data.user)
        dispatch('ActionSetToken', res.data.token)
    })
}

export const ActionSetUser = ({ commit }, payload) => {
    commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
    storage.setHeaderToken(payload)
    commit(types.SET_TOKEN, payload)
}