<template>
	<validation-observer ref="observer" class="form" v-slot="{ valid }" tag="form" v-on:submit.prevent="submitData">
		<validation-provider rules="required|min:3" v-slot="{ errors, required, changed, invalid }" name="фамилия" slim>
			<fieldset class="form__fieldset">
				<input
					:class="{
						'form__input':'form__input',
						'is-active': changed,
						'is-error': invalid,
						'is-required': required
					}"
					v-model="formData.surname"
					name="surname"
					id="surname"
					type="text">
				<label class="form__label" for="surname">Фамилия</label>
				<span class="form__error">{{ errors[0] }}</span>
			</fieldset>
		</validation-provider>
		<validation-provider rules="required|min:3" v-slot="{ errors, required, changed, invalid }" name="имя" slim>
			<fieldset class="form__fieldset">
				<input
					:class="{
						'form__input':'form__input',
						'is-active': changed,
						'is-error': invalid,
						'is-required': required
					}"
					v-model="formData.givenName"
					id="givenName"
					name="givenName"
					type="text">
				<label class="form__label" for="givenName">Имя</label>
				<span class="form__error">{{ errors[0] }}</span>
			</fieldset>
		</validation-provider>
		<validation-provider rules="min:3" v-slot="{ errors, required, changed, invalid }" name="отчество" slim>
			<fieldset class="form__fieldset">
				<input
					:class="{
						'form__input':'form__input',
						'is-active': changed,
						'is-error': invalid
					}"
					v-model="formData.middleName"
					id="middle_name"
					name="middle_name"
					type="text">
				<label class="form__label" for="middle_name">Отчество</label>
				<span class="form__error">{{ errors[0] }}</span>
			</fieldset>
		</validation-provider>
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
					id="email"
					name="email"
					type="email">
				<label class="form__label" for="email">Электронная почта</label>
				<span class="form__error">{{ errors[0] }}</span>
			</fieldset>
		</validation-provider>
		<validation-provider :rules="{ regex: /^([+]?[0-9\s-()]{3,25})*$/i, min: 5 }" v-slot="{ errors, required, changed, invalid }" name="телефон" slim>
			<fieldset class="form__fieldset">
				<input
					:class="{
						'form__input':'form__input',
						'is-active': changed,
						'is-error': invalid
					}"
					v-model="formData.phone"
					id="phone"
					name="phone"
					type="tel">
				<label class="form__label" for="phone">Телефон</label>
				<span class="form__error">{{ errors[0] }}</span>
			</fieldset>
		</validation-provider>
		<validation-provider rules="required|min:2" v-slot="{ errors, required, changed, invalid }" name="организация" slim>
			<fieldset class="form__fieldset">
				<input
					:class="{
						'form__input':'form__input',
						'is-active': changed,
						'is-error': invalid,
						'is-required': required
					}"
					v-model="formData.organization"
					id="organization"
					name="organization"
					type="text">
				<label class="form__label" for="organization">Организация</label>
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
					id="password"
					name="password"
					type="password">
				<label class="form__label" for="password">Пароль</label>
				<span class="form__error">{{ errors[0] }}</span>
			</fieldset>
		</validation-provider>
		<div v-if="status.show" class="form__message">
			{{ status.message }}
		</div>
		<div class="form__footer">
			<input
				:disabled="!valid"
				class="form__button"
				type="submit"
				value="Получить доступ">
			<a class="form__link" href="#">Востановить пароль</a>
		</div>
	</validation-observer>
</template>

<script>
	import axios from 'axios';

	export default {
		name: "CrmForm",
		data() {
			return {
				formData: {
					surname: '',
					givenName: '',
					middleName: '',
					phone: '',
					organization: '',
					password: '',
					email: '',
				},
				status: {
					show: false,
					message: ''
				}
			}
		},
		methods: {
			submitData() {
				axios.post('http://localhost:8000/crmFormHandler.php', {
					webFormData: this.formData
				})
				.then((response) => {
					const data = response.data;
					this.status.show = true;

					if (data.CheckExistsUserResult) {
						this.status.message = 'Ваша заявка отправлена. По окончанию верификации вам будет отправлен Email c подтверждением и ссылкой на Портал самообслуживания.';
					} else {
						this.status.message = 'Пользователь уже существует.';
					}
				})
				.catch(() => {
					this.status.show = true;
					this.status.message = 'Кажется что-то пошло не так.';
				});
			}
		},
		computed: {
		}
	}
</script>