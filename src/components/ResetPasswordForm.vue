<template>
	<validation-observer ref="observer" class="form" v-slot="{ valid }" tag="form">
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
		<validation-provider :rules="{ required: true, regex:  /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)\S{8,}$/, min: 8 }" v-slot="{ errors, required, changed, invalid }" name="пароль" slim>
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
		<validation-provider :rules="{ required: true, confirmed: password, min: 8 }" v-slot="{ errors, required, changed, invalid }" name="подтверждение пароля" slim>
			<fieldset class="form__fieldset">
				<input
					:class="{
						'form__input':'form__input',
						'is-active': changed,
						'is-error': invalid,
						'is-required': required
					}"
					v-model="formData.repeatPassword"
					name="repeatPassword"
					id="repeatPassword"
					type="password">
				<label class="form__label" for="repeatPassword">Подтверждение пароля</label>
				<span class="form__error">{{ errors[0] }}</span>
			</fieldset>
		</validation-provider>
	</validation-observer>
</template>

<script>
	export default {
		name: "ResetPasswordForm",
		data() {
			return {
				formData: {
					email: '',
					password: '',
					repeatPassword: ''
				}
			}
		}
	}
</script>

<style>

</style>