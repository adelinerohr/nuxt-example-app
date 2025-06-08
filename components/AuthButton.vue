<script lang="ts" setup>
const authStore = useAuthStore();
</script>

<template>
  <DropdownMenu v-if="!authStore.loading && authStore.user">
    <DropdownMenuTrigger class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex items-center px-2.5 py-1.5 gap-2 rounded-lg">
      <Avatar class="size-8 rounded-full">
        <AvatarImage
          v-if="authStore.user.image"
          :src="authStore.user.image"
          :alt="authStore.user.name"
        />
        <AvatarFallback v-else class="rounded-full">
          {{ authStore.user.name.charAt(0) }}
        </AvatarFallback>
      </Avatar>
      <div class="grid flex-1 text-left text-sm leading-tight">
        <span class="truncate font-semibold">{{ authStore.user.name }}</span>
        <span class="truncate text-xs">{{ authStore.user.email }}</span>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar class="h-8 w-8 rounded-full">
            <AvatarImage
              v-if="authStore.user.image"
              :src="authStore.user.image"
              :alt="authStore.user.name"
            />
            <AvatarFallback v-else class="rounded-full">
              CN
            </AvatarFallback>
          </Avatar>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">{{ authStore.user.name }}</span>
            <span class="truncate text-xs">{{ authStore.user.email }}</span>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <NuxtLink to="/sign-out">
        <DropdownMenuItem>
          <Icon name="tabler:logout" />
          Sign out
        </DropdownMenuItem>
      </NuxtLink>
    </DropdownMenuContent>
  </DropdownMenu>
  <Button
    v-else
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
