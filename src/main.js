import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

/**
 * 挂载路由和antd组件到vue上
 */
createApp(App).use(router).use(Antd).mount('#app')


