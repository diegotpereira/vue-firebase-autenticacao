import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Sobre from '../views/Sobre.vue';
import firebase from 'firebase';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/registrar',
        name: 'Registrar',
        component: () =>
            import ( /* webpackChunkName: 'registrar' */ '../views/Registrar.vue'),
    },
    {
        path: '/painel',
        name: 'Painel',
        component: () =>
            import ( /* webpackChunkName: 'painel' */ '../views/Painel.vue'),
        meta: {
            authRequired: true,
        }

    },
    {
        path: '/sobre',
        name: 'Sobre',
        component: Sobre
    }
];

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (firebase.auth().currentUser) {
            next();
        } else {
            alert('Você precisa estar logado para ver esta página');
            next({
                path: '/',
            });
        }
    } else {
        next();
    }
})

export default router;