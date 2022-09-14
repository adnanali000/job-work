import Vue from 'vue'
import App from './App.vue'
import './index.css'
import VueResource from 'vue-resource'
import {store} from './store/store'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history' 
})


new Vue({
  store: store,
  render: h => h(App),
  router: router,
}).$mount('#app')


