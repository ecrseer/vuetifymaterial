import VueRouter from "vue-router";

const rotas = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]
const router = VueRouter.createRouter(rotas)
