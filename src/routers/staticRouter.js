import { HOME_URL } from '@/config';
import LoginVue from '@/components/Login.vue';
export const staticRouter = [
    { path: "/", redirect: HOME_URL },
    // { path: "/layout", name: "layout", redirect: HOME_URL },
    { path: "/login", component: LoginVue },
]