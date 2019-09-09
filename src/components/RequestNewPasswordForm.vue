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
		<input
			:disabled="!valid"
			class="form__button"
			type="submit"
			value="Отправить запрос на восстановление пароля">
	</validation-observer>
</template>

<script>
	import axios from 'axios';

	export default {
		name: "RequestNewPasswordForm",
		props: ['xhr'],
		data() {
			return {
				xhrUrl: this.xhr,
				formData: {
					email: ''
				},
				status: {
					show: false,
					message: ''
				}
			}
		},
		methods: {
			submitData() {
				axios.post(this.xhrUrl, {
					resetPasswordFormData: this.formData
				})
					.then((response) => {
						const data = response.data;
						this.status.show = true;
						this.resetForm();

						if (data.result) {
							this.status.message = 'done';
						} else {
							this.status.message = 'false';
						}
					})
					.catch(() => {
						this.status.show = true;
						this.status.message = 'Кажется что-то пошло не так.';
					});
			},
			resetForm() {
				this.formData.email =  '';
				requestAnimationFrame(() => {
					this.$refs.observer.reset();
				});
			}
		}
	}
</script>