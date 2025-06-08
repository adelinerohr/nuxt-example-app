<script lang="ts" setup>
import { useSidebar } from "~/components/ui/sidebar";

const { isMobile } = useSidebar();
const authStore = useAuthStore();
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu v-if="!authStore.loading && authStore.user">
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton size="lg" class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
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
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          :side="isMobile ? 'bottom' : 'right'"
          align="end"
          :side-offset="4"
        >
          <DropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar class="size-8 rounded-full">
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
          <NuxtLink to="/dashboard/settings">
            <DropdownMenuItem>
              <Icon name="tabler:settings" />
              Settings
            </DropdownMenuItem>
          </NuxtLink>
          <DropdownMenuSeparator />
          <NuxtLink to="/sign-out">
            <DropdownMenuItem>
              <Icon name="tabler:logout" />
              Sign out
            </DropdownMenuItem>
          </NuxtLink>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
