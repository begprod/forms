import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RequestNewPassword from './views/RequestNewPassword'
import NewPassword from "./views/NewPassword";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				xhr: document.querySelector('#app').getAttribute('data-new-user-xhr')
			}
		},
		{
			path: '/request-new-password',
			name: 'requestnewpassword',
			component: RequestNewPassword,
			meta: {
				xhr: document.querySelector('#app').getAttribute('data-req-pass-xhr')
			},
		},
		{
			path: '/new-password',
			name: 'newpassword',
			component: NewPassword,
			meta: {
				xhr: document.querySelector('#app').getAttribute('data-new-pass-xhr')
			}
		}
	]
})
