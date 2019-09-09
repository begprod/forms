<template>
	<div class="wrapper">
		<h1>Восстановление пароля</h1>
		<NewPasswordForm/>
	</div>
</template>

<script>
import NewPasswordForm from "@/components/NewPasswordForm";

export default {
	name: 'NewPassword',
	components: {
		NewPasswordForm
	}
}
</script>
