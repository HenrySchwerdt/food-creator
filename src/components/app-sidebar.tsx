"use client"

import {
  Percent,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  List,
  Utensils,
  Send,
  Settings2,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "./ui/sidebar"
import React from "react"
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Menu",
      url: "/dashboard/menu",
      icon: Utensils
    },
    {
      title: "Einkaufsliste",
      url: "/dashboard/list",
      icon: List,
    },
    {
      title: "Discounts",
      url: "/dashboard/discounts",
      icon: Percent,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
    },
  ],

  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="line-clamp-1 flex-1 pr-2 font-medium">
           FoodCreatorAI
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <SidebarLabel>Aktionen</SidebarLabel>
          <NavMain items={data.navMain} />
        </SidebarItem>
        <SidebarItem className="mt-auto">
          <SidebarLabel>Kontakt</SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
