import services from '@/http'
import * as storage from '../storage'
import * as types from './mutation-types'
import { Store } from 'vuex'

//dispatch serve pra chamar uma outra action aqui dentro
export const ActionDoLogin = ({ dispatch }, payload) => {
    return services.auth.login(payload).then(res => {
        dispatch('ActionSetUser', res.data.user)
        dispatch('ActionSetToken', res.data.token)
    })
}

export const ActionCheckToken = ({ dispatch, state }) => {
    if (state.token) {
        return Promise.resolve(state.token)
    }

    const token = storage.getLocalToken()

    if (!token) {
        return Promise.reject(new Error('Invalid token'))
    }

    dispatch('ActionSetToken', token)
    return dispatch('ActionLoadSession')
}

export const ActionLoadSession = ({ dispatch }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data: { token, user } } = await services.auth.loadSession()

            dispatch('ActionSetUser', user)
            // dispatch('ActionSetToken', token) já é settado no action check token

            resolve()
        } catch (error) {
            dispatch('ActionSignOut')
            reject(error)
        }
    })
}

export const ActionSetUser = ({ commit }, payload) => {
    commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
    storage.setHeaderToken(payload)
    storage.setLocalToken(payload)
    commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
    storage.setHeaderToken('')
    storage.deleteLocalToken()
    dispatch('ActionSetUser', {})
    dispatch('ActionSetToken', '')
}