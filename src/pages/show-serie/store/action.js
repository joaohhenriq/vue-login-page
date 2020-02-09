import services from '@/http'
import * as types from './mutation-types'

//dispatch serve pra chamar uma outra action aqui dentro
export const ActionFindSerie = ({ commit }, payload) => {
    return services.showSerie.findSerie({ id: payload }).then(res => {
        commit(types.SET_SERIE, res.data.data)
    })
}

