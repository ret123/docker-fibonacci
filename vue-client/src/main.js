import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Fib from './components/Fib'
import About from './components/About'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Fib},
  {path: '/about', component: About}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
