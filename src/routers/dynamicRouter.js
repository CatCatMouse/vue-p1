import router from '@/routers/index';
import {useAuthStore} from "@/stores/modules/auth"

const modules = import.meta.glob('@/views/**/*.vue')
/**
 * @description 初始化动态路由
 */
export const initDynamicRouter = async () => {
    // TODO ...
    const authStore = useAuthStore();
    await authStore.getAuthMenuList();

    authStore.authMenuList.forEach(element => {
        if (element.component && typeof element.component === "string") {
            element.component = modules["/src/views" + element.component + ".vue"]
        }
        router.addRoute(element)
    });
}