<template>
	<div class="page-center-container">
		<form id="login-form">
			<div class="row content">
				<div class="login-image-bg">
					<div class="login-image">
						<img src="../../images/login-page/login-image.png" alt="Login Image">
					</div>
				</div>
				<h4 class="form-heading">Member Login</h4>
				<div class="col-12 mt-3 mb-1">
					<label for="email">E-mail</label>
					<div class="input-group">
						<input
							class="form-control text-center"
							id="email"
							type="email"
							v-model="email"
							required
							minlength="3"
							maxlength="50"
							autofocus
							@keyup="checkInput($event)"
						>
					</div>
				</div>
				<div class="col-12 mt-1 mb-4">
					<label for="password">Password</label>
					<div class="input-group">
						<input
							class="form-control text-center"
							id="password"
							type="password"
							v-model="password"
							required
						>
					</div>
				</div>
				<button class="button login-button" @click.prevent="loginUser">Log In</button>
				<small class="form-link">Forgot password</small>
				<small class="form-link" @click="toRegister">Create new Account</small>
				<b-alert variant="danger" show v-if="error">{{ error }}</b-alert>
			</div>
		</form>
	</div>
</template>

<script>
	import { globals } from '../../js/globals.js';
	import * as functions from '../../js/functions.js'
	export default {
		name: 'LoginForm',
		data () {
			return {
				email: null,
				password: null,
				error: null,
				loaded: false
			}
		},
		methods: {
			loginUser: async function () {
				let $context = globals.$jquery(this.$el);
				if ($context.find('#login-form').parsley().isValid()) {
					this.$data.error = null;
					functions.serverAxios().post('/login', {
						email: this.$data.email,
						password: this.$data.password
					})
						.then( (response) => {
							this.$store.state.token = response.data.token;
							functions.redirect('/loading');
						})
						.catch( () => {
							$context.find('#login-form').animate({ height: '676px' }, 250, () => {
								this.$data.error = 'Wrong login data!';
							});
						});
				} else {
					$context.find('#login-form').animate({ height: '676px' }, 250, () => {
						this.$data.error = 'Wrong login data!';
					});
				}
			},

			checkInput: async function (event) { functions.checkInput(event); },
			toRegister: async function () { functions.redirect('/register'); },
		}
	}
</script>
