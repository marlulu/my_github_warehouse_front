import { createRouter, createWebHashHistory } from 'vue-router'


import Regist from "@/project/initial/account/Regist";
import Login from "@/project/initial/account/Login";
import mainPage from "@/project/projectTemplate/mainPage";


const routes = [
// 路由的默认路径
    {
        path:'/',
        redirect:"/login"
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/regist',
        component: Regist
    },
    {
        path: '/main',
        component: mainPage,
        meta: {
            requireAuth: true

        },
    },
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
