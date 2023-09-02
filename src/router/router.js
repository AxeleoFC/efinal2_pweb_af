import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/generarToken',
        component: () => import('../modules/pages/ConseguirToken.vue')
    },
    {
        path: '/ingresarEstudiantes',
        component: () => import('../modules/pages/IngresarEstudiante.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router