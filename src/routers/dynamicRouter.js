import router from '@/routers/index';
import {useAuthStore} from "@/stores/modules/auth"

const modules = import.meta.glob('@/views/**/*.vue')
console.log(3, modules)
/**
 * @description 初始化动态路由
 */
export const initDynamicRouter = async () => {
    // TODO ...
    const authStore = useAuthStore();
    await authStore.getAuthMenuList();

    console.log(authStore.authMenuListGet)
    authStore.authMenuList.forEach(element => {
        if (element.compoent && typeof element.compoent === "string") {
            element.compoent = modules["/src/views" + element.compoent + ".vue"]
        }
        router.addRoute(element)
    });
}