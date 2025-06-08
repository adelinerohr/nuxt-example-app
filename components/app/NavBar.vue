<template>
  <div class="border-b">
    <div class="container py-4 flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-medium">
        nuxt-example-app
      </NuxtLink>
      <div class="flex items-center gap-4">
        <AppThemeToggle />
        <AuthButton />
      </div>
    </div>
  </div>
</template>
