import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import FilmeLista from "./components/FilmeLista.vue";

const rotas = [
    { path: '/lista',name:'FilmeLista', component: FilmeLista },
    { path: '/', name:'HelloWorld',component: HelloWorld }
]

const router = createRouter({
    history:createWebHashHistory(),
    rotas,
})

export default router;