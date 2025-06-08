<script lang="ts" setup>
import { useSidebar } from "~/components/ui/sidebar";

const {
  state,
} = useSidebar();

const route = useRoute();

function isActive(path: string) {
  return route.path === path;
}

const NAV_ITEMS = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "tabler:home",
  },
  {
    title: "Create Company",
    href: "/dashboard/add-company",
    icon: "tabler:plus",
  },
];
</script>

<template>
  <Sidebar variant="floating" collapsible="icon">
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <Tooltip
              v-for="item in NAV_ITEMS"
              :key="item.title"
              :disabled="state === 'expanded'"
            >
              <TooltipTrigger>
                <SidebarMenuItem>
                  <SidebarMenuButton as-child :is-active="isActive(item.href)">
                    <NuxtLink :to="item.href">
                      <Icon :name="item.icon" />
                      <span>{{ item.title }}</span>
                    </NuxtLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </TooltipTrigger>
              <TooltipContent side="right">
                {{ item.title }}
              </TooltipContent>
            </Tooltip>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <AppUser />
    </SidebarFooter>
  </Sidebar>
</template>
