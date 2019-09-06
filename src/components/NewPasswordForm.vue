<template>
	<validation-observer ref="observer" class="form" v-slot="{ valid }" tag="form" v-on:submit.prevent="submitData">
		<div v-if="status.show" class="form__message">
			{{ status.message }}
		</div>
		<validation-provider rules="required|email" v-slot="{ errors, required, changed, invalid }" name="email" slim>
			<fieldset class="form__fieldset">
				<input
					:class="{
						'form__input':'form__input',
						'is-active': changed,
						'is-error': invalid,
						'is-required': required
					}"
					v-model="formData.email"
					name="email"
					id="email"
					type="email">
				<label class="form__label" for="email">Электронная почта</label>
				<span class="form__error">{{ errors[0] }}</span>
			</fieldset>
		</validation-provider>
		<validation-provider :rules="{ required: true, regex: /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)\S{8,}$/, min: 8 }" v-slot="{ errors, required, changed, invalid }" name="пароль" vid="password" slim>
			<fieldset class="form__fieldset">
				<input
					:class="{
						'form__input':'form__input',
						'is-active': changed,
						'is-error': invalid,
						'is-required': required
					}"
					v-model="formData.password"
					name="password"
					id="password"
					type="password">
				<label class="form__label" for="password">Пароль</label>
				<span class="form__error">{{ errors[0] }}</span>
			</fieldset>
		</validation-provider>
		<validation-provider rules="required|confirmed:password" v-slot="{ errors, required, changed, invalid }" name="подтверждение пароля" slim>
			<fieldset class="form__fieldset">
				<input
					:class="{
						'form__input':'form__input',
						'is-active': changed,
						'is-error': invalid,
						'is-required': required
					}"
					v-model="repeatPassword"
					name="repeatPassword"
					id="repeatPassword"
					type="password">
				<label class="form__label" for="repeatPassword">Подтверждение пароля</label>
				<span class="form__error">{{ errors[0] }}</span>
			</fieldset>
		</validation-provider>
		<input
			:disabled="!valid"
			class="form__button"
			type="submit"
			value="Отправить">
	</validation-observer>
</template>

<script>
	import axios from 'axios';

	export default {
		name: "NewPasswordForm",
		props: ['xhr'],
		data() {
			return {
				xhrUrl: this.xhr,
				formData: {
					email: '',
					password: '',
				},
				repeatPassword: '',
				status: {
					show: false,
					message: ''
				}
			}
		},
		methods: {
			submitData() {
				axios.post(this.xhrUrl, {
					newPasswordData: this.formData
				})
				.then((response) => {
					const data = response.data;
					this.status.show = true;
					this.resetForm();

					if (data.result) {
						this.status.message = 'Пароль успешно изменен';
					} else {
						this.status.message = 'Пароль не изменен';
					}
				})
				.catch(() => {
					this.status.show = true;
					this.status.message = 'Кажется что-то пошло не так.';
				});
			},
			resetForm() {
				this.formData.password =  '';
				this.formData.email =  '';
				this.repeatPassword = '';
				requestAnimationFrame(() => {
					this.$refs.observer.reset();
				});
			}
		}
	}
</script>