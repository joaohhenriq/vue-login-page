export default [
    {
        name: 'home',
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ './Home')
    }
]