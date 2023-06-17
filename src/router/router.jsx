import { createRouter, createWebHashHistory } from 'vue-router'


import Regist from "@/project/initial/account/Regist";
import Login from "@/project/initial/account/Login";


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
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
