<script lang="ts" setup>
const authStore = useAuthStore();
</script>

<template>
  <Button
    :disabled="authStore.loading"
    :loading="authStore.loading"
    @click="authStore.signIn"
  >
    Sign in
    <div
      v-if="authStore.loading"
      class="animate-spin inline-block size-4 border-2 border-current border-t-transparent text-white rounded-full dark:text-black"
      role="status"
      aria-label="loading"
    >
      <span class="sr-only">Loading...</span>
    </div>
    <Icon v-else name="tabler:arrow-right" />
  </Button>
</template>
