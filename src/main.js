// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';// 这里引入的是router目录，会默认识别里面的index.js文件（不能是其他名字）
// 引入并使用vue-resource网络请求模块
import VueResource from 'vue-resource';

Vue.config.productionTip = false;

Vue.use(VueResource);

// 全局的css
import '@/common/stylus/index.styl';

/* eslint-disable no-new */
new Vue({
  el: '#app', // 这里绑定的是index.html中的id为app的div元素,类似挂载$mount('#app')
  router,
  template: '<App/>',
  components: { App }
});

