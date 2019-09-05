<template>
	<div class="wrapper">
		<h1>Запрос на восстановление пароля</h1>
		<RequestNewPasswordForm xhr="http://localhost:8000/formHandler.php"/>
	</div>
</template>

<script>
import RequestNewPasswordForm from "@/components/RequestNewPasswordForm";

export default {
	name: 'requestnewpassword',
	components: {
		RequestNewPasswordForm
	}
}
</script>
