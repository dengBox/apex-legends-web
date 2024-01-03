import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Common from '../views/Common.vue'

// 自动导入其他 router 文件
const routerList: Array<RouteRecordRaw> = []

const directives = import.meta.globEager('./model/**/')
for (const com in directives) {
  if (!/index.ts$/.test(com)) {
    routerList.push(...(directives[com].default || []))
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Common
  },
  ...routerList
]

const router = createRouter({
  history: createWebHistory('./'),
  routes
})

export default router
