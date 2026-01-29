"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Frame,
  Shirt,
  SquareTerminal,
  // Trophy,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import { DashboardOptionEnum } from "@/types/data-types"

const data = {
  user: {
    name: "admin",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Konten Blog",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Paket Wisata",
          url: "#",
          option: DashboardOptionEnum.paketwisata,
        },
        {
          title: "Kuliner",
          url: "#",
          option: DashboardOptionEnum.kuliner,
        },
        {
          title: "Edukasi",
          url: "#",
          option: DashboardOptionEnum.edukasi,
        },
      ],
    },
    {
      title: "Automatiasasi",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "n8n",
          url: "#",
          option: DashboardOptionEnum.n8n,
        },
        {
          title: "Scanner",
          url: "#",
          option: DashboardOptionEnum.report2digitalscanner,
        },
        {
          title: "Telegram Summary",
          url: "#",
          option: DashboardOptionEnum.telegram,
        },
      ],
    },
    {
      title: "Company Profile",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Landing Page",
          url: "#",
          option: DashboardOptionEnum.landingpage,
        },
        // {
        //   title: "Anauncement",
        //   url: "#",
        //   option: DashboardOptionEnum.announcement,
        // },
        {
          title: "Privacy Policy",
          url: "#",
          option: DashboardOptionEnum.privacypol,
        },
        {
          title: "Gallery",
          url: "#",
          option: DashboardOptionEnum.gallery,
        },
      ],
    },
  ],
  projects: [
    {
      name: "Blog",
      url: "#",
      option: DashboardOptionEnum.blog,
      icon: Frame,
    },
    {
      name: "Souvenir",
      url: "#",
      option: DashboardOptionEnum.souvenir,
      icon: Shirt,
    },
    // {
    //   name: "Competition",
    //   url: "#",
    //   option: DashboardOptionEnum.competition,
    //   icon: Trophy,
    // },
  ],
}

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  setOption: React.Dispatch<React.SetStateAction<DashboardOptionEnum>>
}

export function AppSidebar({ setOption, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} setOption={setOption} />
        <NavProjects projects={data.projects} setOption={setOption} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
