<template>
	<validation-observer ref="observer" class="form" v-slot="{ valid }" tag="form" v-on:submit.prevent="submitData">
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
			value="Отправить">
	</validation-observer>
</template>

<script>
	import axios from 'axios';

	export default {
		name: "RequestResetPassword",
		data() {
			return {
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
				axios.post('http://localhost:8000/resetPasswordHandler.php', {
					resetPasswordFormData: this.formData
				})
					.then((response) => {
						this.status.show = true;

						console.log(response);
					})
					.catch(() => {
						this.status.show = true;
						this.status.message = 'Кажется что-то пошло не так.';
					});
			}
		}
	}
</script>

<style lang="stylus">

</style>