import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import FilmeLista from "@/components/FilmeLista.vue";

const rotas = [

    { path: '/lista',name:'FilmeLista', component: FilmeLista },

]

const router = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    rotas,
})

export default router;