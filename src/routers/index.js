import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import LoginVue from '@/components/Login.vue';
import { HOME_URL } from '@/config';
import {useAuthStore} from '@/stores/modules/auth';
import {initDynamicRouter} from '@/routers/dynamicRouter';
const mode = import.meta.env.VITE_ROUTER_MODE;
const routerMode = {
    hash: () => createWebHashHistory(),
    history: () => createWebHistory()
};
// 静态路由
const staticRouters = [
    { path: "/", redirect: HOME_URL },
    // { path: "/layout", name: "layout", redirect: HOME_URL },
    { path: "/login", component: LoginVue },
];

// 创建路由
const router = createRouter({
    history: routerMode[mode](),
    routes: [...staticRouters],
    strict: false,
    scrollBehavior: () => ({ left: 0, top: 0 })
})
// 导航守卫中设置动态路由
router.beforeEach(async (to, from) => {
    const authStore = useAuthStore();
    await initDynamicRouter()
})

export default router