import { createRouter, createWebHashHistory } from 'vue-router'

import Initial from "@/project/initial/Initial";



const routes = [
// 路由的默认路径
    {
        path:'/',
        redirect:"/initial"
    },
    {
        path: '/initial',
        component: Initial
    },
    // {
    //     path: '/about',
    //     component: About
    // },
    // {
    //     path: '/movie',
    //     component: Movie
    // }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
