
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import LoginPage from '../components/pages/LoginPage.vue'
import RegisterForm from '../components/elements/RegisterForm.vue'
import LoginForm from '../components/elements/LoginForm.vue'
import LoadingPage from '../components/pages/LoadingPage.vue'
import MainPage from '../components/pages/MainPage.vue'
import Dashboard from '../components/views/Dashboard.vue'
import Profile from '../components/views/Profile.vue'
import Clan from '../components/views/Clan.vue'
import Releases from '../components/views/Releases.vue'
import Shop from '../components/views/Shop.vue'
import Credits from '../components/views/Credits.vue'

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', redirect: '/login' },
		{ path: '/login', component: LoginPage,
			children: [
				{ path: '/login', component: LoginForm },
				{ path: '/register', component: RegisterForm }
			]
		},
		{ path: '/loading', component: LoadingPage },
		{ path: '/main', component: MainPage, meta: { requiresLogin: true },
			children: [
				{ path: '/dashboard', component: Dashboard },
				{ path: '/profile', component: Profile },
				{ path: '/clan', component: Clan },
				{ path: '/releases', component: Releases },
				{ path: '/shop', component: Shop },
				{ path: '/credits', component: Credits }
			]
		}
	]
});
