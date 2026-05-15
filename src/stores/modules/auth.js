import {defineStore} from 'pinia'
import {getAuthMenuListApi} from '@/api/modules/login'
export const useAuthStore = defineStore('geeker-auth',{
    state: () => ({
        // 菜单权限列表
        authMenuList: [],
    }),
    getters: {
        // 获取菜单权限列表
        authMenuListGet: state => state.authMenuList,
    },
    actions: {
        // 异步获取菜单权限列表
        async getAuthMenuList() {
            const data = await getAuthMenuListApi()
            this.authMenuList = data
        }
    }
})