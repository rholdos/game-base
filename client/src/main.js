
// Vue Core
import Vue from 'vue'
import App from './App.vue'
import router from './js/router.js'
import store from './js/store.js'

// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

// Vue DragScroll
import VueDragscroll from 'vue-dragscroll'
Vue.use(VueDragscroll);

// Particles JS
import 'particles.js/particles.js'

// Parsley JS
import 'parsleyjs/dist/parsley.min'

// Sass
import './sass/style.scss'
import Router from "vue-router";
import Store from "./js/store";

// Production mode tips
Vue.config.productionTip = false;

// Vue instance
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
