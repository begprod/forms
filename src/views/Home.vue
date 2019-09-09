<template>
	<div class="wrapper">
		<h1>Создание портального пользователя</h1>
		<crmForm/>
	</div>
</template>

<script>
	import crmForm from '@/components/CrmForm.vue';

	export default {
		name: 'Home',
		components: {
			crmForm
		}
	}
</script>
