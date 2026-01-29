"use client"

import {
  type LucideIcon,
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import type { DashboardOptionEnum } from "@/types/data-types"

export function NavProjects({
  projects,
  setOption
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
    option: DashboardOptionEnum
  }[],
  setOption: React.Dispatch<React.SetStateAction<DashboardOptionEnum>>
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <div onClick={() => setOption(item.option)}>
                <item.icon />
                <span>{item.name}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
