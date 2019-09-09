<template>
	<div class="wrapper">
		<h1>Запрос на восстановление пароля</h1>
		<RequestNewPasswordForm/>
	</div>
</template>

<script>
import RequestNewPasswordForm from "@/components/RequestNewPasswordForm";

export default {
	name: 'RequestNewPassword',
	components: {
		RequestNewPasswordForm
	}
}
</script>
