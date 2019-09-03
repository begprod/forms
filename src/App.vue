<template>
	<div class="wrapper">
		<h1>Создание портального пользователя</h1>
		<div id="form">
			<h1></h1>
			<CrmForm/>
		</div>
	</div>
</template>

<script>
	import CrmForm from "./components/CrmForm";

	export default {
		name: 'app',
		components: {
			CrmForm
		}
	}
</script>

<style lang="stylus">
	body
		margin 0
		box-sizing border-box
		font-family Arial, sans-serif

	*
	*:before
	*:after
		box-sizing inherit

	.wrapper
		display flex
		flex-direction column
		justify-content center
		width 700px
		margin 0 auto
		min-height 100vh
</style>
