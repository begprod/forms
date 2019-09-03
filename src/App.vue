<template>
	<div id="form">
		<CrmForm/>
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

	#form
		display flex
		flex-direction column
		justify-content center
		min-height 100vh
</style>
