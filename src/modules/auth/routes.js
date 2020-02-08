export default [
    {
        name: 'login',
        path: '/login',
        component: () => import(/* webpackChunkName: "home" */ './pages/Login')
    },
]