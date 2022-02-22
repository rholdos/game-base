<template>
	<div class="page-center-container">
		<form id="register-form">
			<div class="row">
				<div class="col-lg-6 h-100 d-none d-lg-block right">
					<img src="../../images/login-page/smoke-lady.jpg" alt="Smoke lady">
				</div>
				<div class="col-lg-6 h-100 left">
					<h2 class="form-heading">Your journey begins here</h2>
					<h4 class="form-subheading">Member Register</h4>
					<div class="col-11 col-md-10 mx-auto mt-3 mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">Username</span>
							</div>
							<input
								type="text"
								class="form-control"
								v-model="username"
								required
								autofocus
								@keyup="checkInput($event)"
							>
						</div>
					</div>
					<div class="col-11 col-md-10 mx-auto mt-2 mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">E-mail</span>
							</div>
							<input
								type="email"
								class="form-control"
								v-model="email"
								required
								@keyup="checkInput($event)"
							>
						</div>
					</div>
					<div class="col-11 col-md-10 mx-auto mt-2 mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">Password</span>
							</div>
							<input
								type="password"
								class="form-control"
								v-model="password"
								required
								@keyup="checkInput($event)"
							>
						</div>
					</div>
					<div class="col-11 col-md-10 mx-auto mt-3 mb-5">
						<div class="form-check">
							<input
								type="checkbox"
								id="terms-check"
								class="form-check-input"
							  v-model="termsCheck"
								required
							>
							<label class="form-check-label" for="terms-check">
								Yes, I agree with terms of use
							</label>
						</div>
					</div>
					<button class="button register-btn" @click.prevent="registerUser">Register account</button>
					<small class="form-link" @click="toLogin">Already have an new Account? Log in!</small>
					<b-alert variant="success" show v-if="success">{{ success }}</b-alert>
					<b-alert variant="danger" show v-if="error">{{ error }}</b-alert>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	import { globals } from '../../js/globals.js'
	import * as functions from '../../js/functions.js'
	export default {
		name: 'RegisterForm',
		data () {
			return {
				username: null,
				email: null,
				password: null,
				termsCheck: null,
				success: null,
				error: null
			}
		},
		methods: {
			registerUser: async function () {
				if (globals.$jquery(this.$el).find('#register-form').parsley().isValid()) {
					this.$data.error = null;
					this.$data.success = null;
					functions.serverAxios().post('/register', {
						username: this.$data.username,
						email: this.$data.email,
						password: this.$data.password
					})
						.then( () => {
							this.$data.success = 'Registration successful! You can now log in';
							window.setTimeout( () => {
								functions.redirect('/login')
							}, 1500);
						})
						.catch( () => {
							this.$data.error = 'An error has occurred trying to create your account!';
						});
				} else {
					this.$data.error = 'An error has occurred trying to create your account!';
				}
			},

			checkInput: async function (event) { functions.checkInput(event); },
			toLogin: async function () { functions.redirect('/login'); }
		}
	}
</script>
