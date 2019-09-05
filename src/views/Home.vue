<template>
  <div class="wrapper">
    <h1>Создание портального пользователя</h1>
    <crmForm xhr="http://localhost:8000/formHandler.php"/>
  </div>
</template>

<script>
import crmForm from '@/components/CrmForm.vue';

export default {
  name: 'home',
  components: {
    crmForm
  }
}
</script>
