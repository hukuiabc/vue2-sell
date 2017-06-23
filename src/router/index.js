import Vue from 'vue';
import Router from 'vue-router';
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';

Vue.use(Router);
// 创建路由实例并配置路由映射
// path:'*',redirect:'/home'  重定向到path是/home的映射
export default new Router({
    linkActiveClass: 'active',
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
      {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
      {
      path: '/seller',
      name: 'seller',
      component: seller
    },
      {
          path: '*',
          component: goods
      }
  ]
});
