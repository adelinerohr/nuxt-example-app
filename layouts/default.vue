<script lang="ts" setup>
import { cn } from "~/lib/utils";

const authStore = useAuthStore();
await authStore.init();

const route = useRoute();
const isDashboard = route.path.startsWith("/dashboard");

const defaultOpen = useCookie<boolean>("sidebar_state");
</script>

<template>
  <TooltipProvider>
    <SidebarProvider :default-open="defaultOpen">
      <div :class="cn('flex min-h-screen', isDashboard ? 'flex-row' : 'flex-col')">
        <AppNavBar v-if="!isDashboard" />
        <AppSidebar v-if="isDashboard" />
        <SidebarInset v-if="isDashboard">
          <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div class="flex items-center gap-2 px-4">
              <SidebarTrigger class="-ml-1" />
            </div>
          </header>
          <main class="flex flex-1 flex-col gap-4 p-4 pt-0">
            <slot />
          </main>
        </SidebarInset>
        <main v-if="!isDashboard">
          <slot />
        </main>
      </div>
    </SidebarProvider>
  </TooltipProvider>
</template>
