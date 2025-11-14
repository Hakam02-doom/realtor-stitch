"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface MenuItem {
  id: string;
  icon: string;
  label: string;
  href?: string;
  onClick?: () => void;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

export default function Sidebar({ menuItems }: SidebarProps) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    // Set active tab based on current pathname
    const currentItem = menuItems.find((item) => item.href === pathname);
    if (currentItem) {
      setActiveTab(currentItem.id);
    }
  }, [pathname, menuItems]);

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-black/20 p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          const className = `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
            isActive
              ? "bg-primary/20 dark:bg-primary/30 text-primary"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
          }`;

          if (item.href) {
            return (
              <Link key={item.id} href={item.href} className={className}>
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                {item.label}
              </Link>
            );
          }

          return (
            <button key={item.id} onClick={item.onClick} className={className}>
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

