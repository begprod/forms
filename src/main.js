import Vue from 'vue'
import App from './App.vue'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full';

Vue.config.productionTip = false;

Vue.component('ValidationProvider', ValidationProvider);

new Vue({
	el: '#form',
	components: {
		App
	},
	render: h => h(App)
});