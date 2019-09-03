<template>
	<form action="" class="form">
		<input class="form__input" id="cuid" name="cuid" type="hidden" value="1234">
		<fieldset class="form__fieldset">
			<input class="form__input" id="surname">
			<label class="form__label" for="surname">Фамилия</label>
		</fieldset>
		<fieldset class="form__fieldset">
			<input class="form__input" id="name" name="name" type="text">
			<label class="form__label" for="name">Имя</label>
		</fieldset>
		<fieldset class="form__fieldset">
			<input class="form__input" id="middle_name" name="middle_name" type="text">
			<label class="form__label" for="middle_name">Отчество</label>
		</fieldset>
		<fieldset class="form__fieldset">
			<validation-provider rules="required|email" v-slot="{ errors, changed }" name="email" tag="div">
				<input
						:class="{
							'form__input':'form__input',
							'is-active': changed
						}"
						v-model="email"
						id="email"
						name="email"
						type="email">
				<label class="form__label" for="email">Email</label>
				<span class="form__error">{{ errors[0] }}</span>
			</validation-provider>
		</fieldset>
		<fieldset class="form__fieldset">
			<input class="form__input" id="phone" name="phone" type="tel">
			<label class="form__label" for="phone">Телефон</label>
		</fieldset>
		<fieldset class="form__fieldset">
			<input class="form__input" id="organization" name="organization" type="text">
			<label class="form__label" for="organization">Организация</label>
		</fieldset>
		<fieldset class="form__fieldset">
			<input class="form__input" id="password" name="password" type="password">
			<label class="form__label" for="password">Пароль</label>
		</fieldset>
		<input class="form__button" type="submit" value="Отправить">
	</form>
</template>

<script>
	export default {
		name: "CrmForm",
		data() {
			return {
				email: ''
			}
		},
		methods: {
			onFocus(event) {
				const target = event.target;
				console.log(event);
			}
		},
		computed: {
			isFormDirty() {
				if (!this.fields['$scopeName']) {
					return false;
				}
				return Object.keys(this.fields['$scopeName']).some(key => this.fields['$scopeName'][key].dirty);
			}
		}
	}
</script>

<style lang="stylus">
	.form
		width 700px
		margin 0 auto
		/*border: 1px solid red*/
		&__fieldset
			position relative
			margin 0 0 30px 0
			padding 0
			background-color white
			border none
		&__label
			position absolute
			top 17px
			left 20px
			display block
			font-size 14px
			color #999
			user-select none
			cursor text
			transition all .2s ease-in-out
		&__input
			width 100%
			height 50px
			margin 0
			padding 20px 50px 0 20px
			font-size 14px
			border 1px solid #999
			border-radius 3px
			&.is-active
			&:focus
				~ .form__label
					font-size 11px
					transform translateY(-7px)
		&__error
			position absolute
			left 0
			bottom -18px
			font-size 12px
			color #f00
		&__button
			width 100%
			padding: 20px 30px 20px 30px
			font-size 14px
			font-weight bold
			color white
			border none
			border-radius 3px
			background-color #c00
</style>