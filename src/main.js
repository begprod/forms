import Vue from 'vue'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full';
import { localize } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru.json';
import App from './App.vue'

localize('ru', ru);

Vue.config.productionTip = false;

// Register ValidationProvider it globally
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
	el: '#form',
	components: {
		App
	},
	render: h => h(App)
});