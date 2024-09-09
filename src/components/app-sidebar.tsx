"use client";

import {
  Percent,
  LifeBuoy,
  List,
  Utensils,
  Send,
  Settings2,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "./ui/sidebar";
import React from "react";
const data = {
  navMain: [
    {
      title: "Menu",
      url: "/dashboard/menu",
      icon: Utensils,
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
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="line-clamp-1 flex-1 pr-2 font-medium">Mealy</div>
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
    </Sidebar>
  );
}
