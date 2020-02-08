import services from '@/http'
import * as types from './mutation-types'

//dispatch serve pra chamar uma outra action aqui dentro
export const ActionFindWatchlist = ({ commit }) => {
    return services.watchlist.findWatchlist().then(res => {
        commit(types.SET_WATCHLIST, res.data.data)
    })
}

