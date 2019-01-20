import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [{ path: "/", component: App}]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})