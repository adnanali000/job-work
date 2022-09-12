import Vue from 'vue'
import App from './App.vue'
import './index.css'
// import VueTables from 'vue-tables-2-premium'
import VueResource from 'vue-resource'
// import "vue-easytable/libs/theme-default/index.css";
// import VueEasytable from "vue-easytable";
import {store} from './store/store'


Vue.config.productionTip = false

// Vue.use(VueTables.ClientTable);
Vue.use(VueResource)
// Vue.use(VueEasytable);



new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')


