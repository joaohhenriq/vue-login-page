export default [
    {
        name: 'watchlist',
        path: '/watchlist',
        component: () => import('./Watchlist'),
        meta: {
            showNavbar: true,
            title: 'Watchlist',
            icon: 'playlist_play',
        },
    }
]