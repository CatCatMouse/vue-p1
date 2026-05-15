import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import {staticRouter} from '@/routers/staticRouter';
import {useAuthStore} from '@/stores/modules/auth';
import {initDynamicRouter} from '@/routers/dynamicRouter';
const mode = import.meta.env.VITE_ROUTER_MODE;
const routerMode = {
    hash: () => createWebHashHistory(),
    history: () => createWebHistory()
};
// 静态路由
const staticRouters = [
   
];

// 创建路由
const router = createRouter({
    history: routerMode[mode](),
    routes: [...staticRouter],
    strict: false,
    scrollBehavior: () => ({ left: 0, top: 0 })
})
// 导航守卫中设置动态路由
router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    await initDynamicRouter()
    return next()
})

export default router