<script lang="ts" setup>
const authStore = useAuthStore();

onMounted(() => {
  authStore.signOut();
});
</script>

<template>
  <div class="container mt-4 min-h-96 mx-auto flex items-center justify-center flex-col gap-6 bg-secondary rounded-2xl">
    <div
      class="animate-spin inline-block size-12 border-3 border-current border-t-transparent text-black rounded-full dark:text-white"
      role="status"
      aria-label="loading"
    >
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
