<script lang="ts" setup>
const authStore = useAuthStore();
</script>

<template>
  <div class="container py-44">
    <div class="flex flex-col items-center gap-8">
      <div class="space-y-4 text-center">
        <h1 class="text-7xl font-medium">
          Example Nuxt Application
        </h1>
        <p class="text-xl text-muted-foreground">
          Nuxt UI Pro is a collection of premium Vue components built on top of
          Nuxt UI to create beautiful & responsive Nuxt applications in minutes.
          It includes all primitives to build landing pages, documentations,
          blogs, dashboards or entire SaaS products.
        </p>
      </div>
      <div class="flex gap-4">
        <NuxtLink to="/">
          <AuthButton v-if="!authStore.user" />
          <Button v-else as-child>
            <NuxtLink to="/dashboard">
              Go to dashboard
              <Icon name="tabler:arrow-right" />
            </NuxtLink>
          </Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
