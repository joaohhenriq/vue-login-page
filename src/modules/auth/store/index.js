import state from './state'
import mutations from './mutation'
import * as actions from './action'
import * as getters from './getters'

export default {
    state,
    actions,
    getters,
    mutations,
    namespaced: true,
}