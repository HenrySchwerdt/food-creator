"use client";

import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { cn } from "~/lib/utils";

export function NavMain({
  className,
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
} & React.ComponentProps<"ul">) {
  return (
    <ul className={cn("grid gap-0.5", className)}>
      {items.map((item) => (
        <div key={item.url}>
          <li>
            <div className="relative flex items-center">
              <Link
                href={item.url}
                className="flex h-8 min-w-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
              >
                <item.icon className="h-4 w-4 shrink-0" />
                <div className="flex flex-1 overflow-hidden">
                  <div className="line-clamp-1 pr-6">{item.title}</div>
                </div>
              </Link>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
}
