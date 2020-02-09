import { routes as home } from '../pages/home'
import { routes as auth } from '../modules/auth'
import { routes as watchlist } from '../pages/watchlist'
import { routes as showSeries } from '../pages/show-serie'

export default [
    ...home,
    ...auth,
    ...watchlist,
    ...showSeries,
]