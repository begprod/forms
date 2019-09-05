import Vue from 'vue'
import App from './App.vue'
import { ValidationProvider, ValidationObserver, localize, extend } from 'vee-validate/dist/vee-validate.full';
import ru from 'vee-validate/dist/locale/ru.json';
import router from './router'

localize('ru', ru);

extend('confirmed', {
	message: 'Поле {_field_} не совпадает с полем пароль'
});

Vue.config.productionTip = false;

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
	el: '#app',
	components: {
		App
	},
	router,
	render: h => h(App)
});