"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AppearancePage() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("appearance");
  const [darkMode, setDarkMode] = useState(false);
  const [newMessages, setNewMessages] = useState(true);
  const [storyComments, setStoryComments] = useState(true);
  const [serviceUpdates, setServiceUpdates] = useState(false);

  useEffect(() => {
    if (pathname === "/dashboard") {
      setActiveTab("dashboard");
    } else if (pathname === "/appearance") {
      setActiveTab("appearance");
    } else if (pathname === "/saveditems") {
      setActiveTab("saved");
    } else if (pathname === "/privacy") {
      setActiveTab("privacy");
    } else if (pathname === "/profile") {
      setActiveTab("personal");
    }
  }, [pathname]);

  const menuItems = [
    { id: "dashboard", icon: "dashboard", label: "Dashboard", href: "/dashboard" },
    { id: "appointments", icon: "calendar_month", label: "Appointments", href: "#" },
    { id: "requests", icon: "inbox", label: "Service Requests", href: "#" },
    { id: "analytics", icon: "analytics", label: "Analytics", href: "#" },
    { id: "appearance", icon: "contrast", label: "Appearance", href: "/appearance" },
    { id: "saved", icon: "bookmark", label: "Saved Items", href: "/saveditems" },
    { id: "privacy", icon: "info", label: "Privacy Policy", href: "/privacy" },
    { id: "personal", icon: "person", label: "Profile", href: "/profile" },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle dark mode on html element
    if (typeof document !== "undefined") {
      const html = document.documentElement;
      if (!darkMode) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  };

  return (
    <div className="flex min-h-screen font-display bg-background-light dark:bg-background-dark text-[#101618] dark:text-gray-200">
      {/* SideNavBar */}
      <aside className="w-64 shrink-0 bg-white dark:bg-background-dark dark:border-r dark:border-gray-800 p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 p-2">
            <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-uL6mo7aqeMIMIUKLS8T6klHS9lhDu3xtno1Tgg43pgml0THte7eNeQGMB2RmouMIImMIs9AMvclpb46A98r_8B5MAJdwAoQHl7jCLvYFJ5whRCcX8re92No3VL4uzpIkzfnWH1kBqVAlpYErtSnCnzkgsGfptQvyMk_SKdwMg1zmCWtcwSxeUN7AW63VqVC16tWZoab-Tb2LfmsktAHdxshmwKZRhRmeSooQwbCmJNMDezkcL8FruS6OfDXNp_F8XDU7jxo8U795"
                alt="User profile picture"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#101618] dark:text-white text-base font-medium leading-normal">Jordan Smith</h1>
              <p className="text-[#5e818d] dark:text-gray-400 text-sm font-normal leading-normal">
                jordan.smith@email.com
              </p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              const className = `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/20 text-primary dark:bg-primary/30"
                  : "text-[#5e818d] dark:text-gray-400 hover:text-primary dark:hover:text-primary"
              }`;
              return (
                <Link key={item.id} href={item.href} className={className}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <p className="text-sm font-medium leading-normal">{item.label}</p>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <a
            className="flex items-center gap-3 px-3 py-2 text-[#5e818d] dark:text-gray-400 hover:text-primary dark:hover:text-primary"
            href="#"
          >
            <span className="material-symbols-outlined">help</span>
            <p className="text-sm font-medium leading-normal">Help &amp; Support</p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            href="#"
          >
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium leading-normal">Logout</p>
          </a>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          {/* PageHeading */}
          <header className="flex flex-wrap justify-between gap-3 mb-10">
            <div className="flex min-w-72 flex-col gap-2">
              <h1 className="text-[#101618] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                Settings
              </h1>
              <p className="text-[#5e818d] dark:text-gray-400 text-base font-normal leading-normal">
                Manage your account settings and set preferences.
              </p>
            </div>
          </header>
          {/* Appearance Section */}
          <section className="mb-12">
            {/* SectionHeader */}
            <h3 className="text-[#101618] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
              Appearance
            </h3>
            {/* BodyText */}
            <p className="text-[#5e818d] dark:text-gray-400 text-base font-normal leading-normal pb-4 pt-1">
              Customize the look and feel of the app.
            </p>
            <div className="bg-white dark:bg-slate-800/50 rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
              {/* ListItem */}
              <div className="flex items-center gap-4 px-4 min-h-[72px] py-3 justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-[#101618] dark:text-white flex items-center justify-center rounded-lg bg-background-light dark:bg-slate-700 shrink-0 size-12">
                    <span className="material-symbols-outlined">dark_mode</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#101618] dark:text-white text-base font-medium leading-normal line-clamp-1">
                      Dark Mode
                    </p>
                    <p className="text-[#5e818d] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
                      Toggle to switch between light and dark themes.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-gray-200 dark:bg-slate-700 p-0.5 has-[:checked]:bg-primary">
                    <div
                      className={`h-full w-[27px] rounded-full bg-white transition-transform duration-300 ease-in-out ${
                        darkMode ? "translate-x-[20px]" : "translate-x-0"
                      }`}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px",
                      }}
                    ></div>
                    <input
                      className="absolute invisible w-full h-full"
                      type="checkbox"
                      checked={darkMode}
                      onChange={toggleDarkMode}
                    />
                  </label>
                </div>
              </div>
            </div>
          </section>
          {/* Notifications Section */}
          <section>
            {/* SectionHeader */}
            <h3 className="text-[#101618] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
              Notifications
            </h3>
            {/* BodyText */}
            <p className="text-[#5e818d] dark:text-gray-400 text-base font-normal leading-normal pb-4 pt-1">
              Choose how you want to be notified.
            </p>
            <div className="bg-white dark:bg-slate-800/50 rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
              {/* ListItem for Notifications */}
              <div className="flex items-center gap-4 px-4 min-h-[72px] py-3 justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-[#101618] dark:text-white flex items-center justify-center rounded-lg bg-background-light dark:bg-slate-700 shrink-0 size-12">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#101618] dark:text-white text-base font-medium leading-normal line-clamp-1">
                      New Messages
                    </p>
                    <p className="text-[#5e818d] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
                      Get notified when you receive a new message.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-gray-200 dark:bg-slate-700 p-0.5 has-[:checked]:bg-primary">
                    <div
                      className={`h-full w-[27px] rounded-full bg-white transition-transform duration-300 ease-in-out ${
                        newMessages ? "translate-x-[20px]" : "translate-x-0"
                      }`}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px",
                      }}
                    ></div>
                    <input
                      className="absolute invisible w-full h-full"
                      type="checkbox"
                      checked={newMessages}
                      onChange={() => setNewMessages(!newMessages)}
                    />
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-4 px-4 min-h-[72px] py-3 justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-[#101618] dark:text-white flex items-center justify-center rounded-lg bg-background-light dark:bg-slate-700 shrink-0 size-12">
                    <span className="material-symbols-outlined">comment</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#101618] dark:text-white text-base font-medium leading-normal line-clamp-1">
                      Story Comments
                    </p>
                    <p className="text-[#5e818d] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
                      Get notified when someone comments on your story.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-gray-200 dark:bg-slate-700 p-0.5 has-[:checked]:bg-primary">
                    <div
                      className={`h-full w-[27px] rounded-full bg-white transition-transform duration-300 ease-in-out ${
                        storyComments ? "translate-x-[20px]" : "translate-x-0"
                      }`}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px",
                      }}
                    ></div>
                    <input
                      className="absolute invisible w-full h-full"
                      type="checkbox"
                      checked={storyComments}
                      onChange={() => setStoryComments(!storyComments)}
                    />
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-4 px-4 min-h-[72px] py-3 justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-[#101618] dark:text-white flex items-center justify-center rounded-lg bg-background-light dark:bg-slate-700 shrink-0 size-12">
                    <span className="material-symbols-outlined">campaign</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#101618] dark:text-white text-base font-medium leading-normal line-clamp-1">
                      Service Updates
                    </p>
                    <p className="text-[#5e818d] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
                      Get notified about new features and platform updates.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-gray-200 dark:bg-slate-700 p-0.5 has-[:checked]:bg-primary">
                    <div
                      className={`h-full w-[27px] rounded-full bg-white transition-transform duration-300 ease-in-out ${
                        serviceUpdates ? "translate-x-[20px]" : "translate-x-0"
                      }`}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px",
                      }}
                    ></div>
                    <input
                      className="absolute invisible w-full h-full"
                      type="checkbox"
                      checked={serviceUpdates}
                      onChange={() => setServiceUpdates(!serviceUpdates)}
                    />
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

