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
			component: Home
		},
		{
			path: '/request-new-password',
			name: 'requestnewpassword',
			component: RequestNewPassword
		},
		{
			path: '/new-password',
			name: 'newpassword',
			component: NewPassword
		}
	]
})
