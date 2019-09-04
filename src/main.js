import Vue from 'vue'
import App from './App.vue'
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate/dist/vee-validate.full';
import ru from 'vee-validate/dist/locale/ru.json';

localize('ru', ru);

Vue.config.productionTip = false;

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
	el: '#form',
	components: {
		App
	},
	render: h => h(App)
});