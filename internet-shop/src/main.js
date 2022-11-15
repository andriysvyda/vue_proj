import { createApp } from 'vue'
import App from './App.vue'
//import Vue from 'vue'

import router from "./router"
import store from "./store"
//import firebase from 'firebase';             
//import "./firebase-config";

createApp(App).use(router).use(store).mount('#app')

// Vue.prototype.$firebase = firebase;        

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
