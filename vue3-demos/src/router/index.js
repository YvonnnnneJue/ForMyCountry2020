import { createRouter, /*createWebHashHistory,*/ createWebHistory } from "vue-router"
import store from '../store/index.js'
// import axios from 'axios'


// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
// 首页
import home from "../views/home/home.vue";
import names from './demosName.json';


// 2. 定义路由配置
// base
const baseRoutes = [
  {
    path: "/",
    redirect: '/home',
    component: home
  },
  { name: 'home', path: "/home", component: home },
  // { name: '1', path: "/1", component: test1 },
  // { name: '2', path: "/2", component: test2 },
];
// demos view
let demoRoutes = [];
console.log(names)
const demoNames = names;
store.commit("demoNames", demoNames);
for (let item of demoNames) {
  let name = `${item.NO}-${item.EN}`;
  let title = `${item.NO}：${item.CN}`;
  demoRoutes.push({
    name, meta: { title }, path: `/${name}`, component: () => import(`../views/${name}/home.vue`)
  })
}
/**
 * 其他页面
 */
const otherRouter = [
  { name: '404', path: "/:catchAll(.*)", component: import("../views/other/404.vue") }
];

// 3. 创建路由实例
const router = createRouter({
  // 4. 采用hash 模式
  // history: createWebHashHistory(),
  // 4. 采用 history 模式
  history: createWebHistory(),
  routes: [...baseRoutes, ...demoRoutes, ...otherRouter],// short for `routes: routes`
});

export default router;