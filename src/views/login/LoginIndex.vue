<template>
  <div class="login-page p-10">
    <button @click="goHome">to home</button>
  </div>
</template>

<script setup lang="tsx">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/home')
}
</script>

<style scoped lang="scss">
.login-page {
  background-color: #000;
}
</style>
