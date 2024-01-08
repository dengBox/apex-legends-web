import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/login/LoginIndex.vue'

// 自动导入其他 router 文件
const routerList: Array<RouteRecordRaw> = []

const directives = import.meta.glob('./model/*', { eager: true })
for (const com in directives) {
  if (!/index.ts$/.test(com)) {
    routerList.push(...((directives[com] as any).default || []))
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  ...routerList
]

const router = createRouter({
  history: createWebHistory('./'),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
