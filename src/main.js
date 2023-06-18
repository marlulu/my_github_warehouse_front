import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from "@/store";


/**
 * 挂载路由和antd组件到vue上
 */
createApp(App).use(router).use(Antd).use(store).mount('#app')

/**
 * 路由拦截
 */
router.beforeEach((to, from, next) => {
    if (to.path === '/login' || to.path === '/regist') {
        // 登录或者注册才可以往下进行
        next();
    } else {
        // 获取 token
        const token = localStorage.getItem('token');
        // token 不存在
        if (token === null || token === '') {
            next('/login');
        } else {
            next();
        }
    }
})





