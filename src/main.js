import Vue from 'vue'
import App from './App.vue'
import './index.css'
// import VueTables from 'vue-tables-2-premium'
import VueResource from 'vue-resource'
// import "vue-easytable/libs/theme-default/index.css";
// import VueEasytable from "vue-easytable";
import {store} from './store/store'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.config.productionTip = false

// Vue.use(VueTables.ClientTable);
Vue.use(VueResource)
// Vue.use(VueEasytable);
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


