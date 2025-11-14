"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ActivityPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("activity");

  const sidebarItems = [
    { id: "activity", icon: "insights", label: "My Activity", filled: true },
    { id: "stories", icon: "table", label: "My Stories", filled: false },
    { id: "saved", icon: "bookmark", label: "Saved Items", filled: false },
  ];

  const tabs = [
    { id: "activity", label: "My Activity" },
    { id: "stories", label: "My Stories" },
    { id: "saved", label: "Saved Items" },
  ];

  const activities = [
    {
      id: 1,
      icon: "bookmark",
      action: "You saved a new property.",
      description: "Modern Glass House in the Suburbs",
      time: "2 hours ago",
    },
    {
      id: 2,
      icon: "edit_square",
      action: "You posted a new story.",
      description: "My Journey to Finding the Perfect Downtown Loft",
      time: "1 day ago",
    },
    {
      id: 3,
      icon: "person_add",
      action: "You connected with a professional.",
      description: "Jameson Architect Group",
      time: "3 days ago",
    },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display bg-background-light dark:bg-background-dark text-[#101618] dark:text-white">
      {/* TopNavBar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f4f5] dark:border-b-[#1f2e33] px-6 sm:px-10 lg:px-20 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link href="/home" className="flex items-center gap-4 text-[#101618] dark:text-white">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#101618] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              Realtor Services
            </h2>
          </Link>
        </div>
        <div className="hidden lg:flex flex-1 justify-center gap-8">
          <div className="flex items-center gap-9">
            <Link className="text-[#101618] dark:text-white text-sm font-medium leading-normal hover:text-primary" href="/home">
              Home
            </Link>
            <Link className="text-[#101618] dark:text-white text-sm font-medium leading-normal hover:text-primary" href="/find">
              Properties
            </Link>
            <Link className="text-[#101618] dark:text-white text-sm font-medium leading-normal hover:text-primary" href="/professionals">
              Professionals
            </Link>
            <Link className="text-[#101618] dark:text-white text-sm font-medium leading-normal hover:text-primary" href="#">
              Stories
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/activity"
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f0f4f5] dark:bg-white/10 text-[#101618] dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">notifications</span>
          </Link>
          <Link href="/profile" className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCogUYHvandipAXHjEdbun4QqOawZafeV4GVjMxhU_5K2cTyZ933uXRjVN1WUFXrTp9baWvCZgb9PEv6dU9TqaHi5zs4cCQ6b1xG_D53UIn29EbYAS4eALp75PQQr-TXQBDbSmpSD_B-u99PRtVvjJOEpS022BsSyN_uU9G_BrlyveF3DvFzwZpMpu_87zxy9ZwntExNbp5i1qdHqr51cMfQ-QBnWrK6kEBNHnFwO9pyigkd8sc0FpFDgIiNXY6thrk4YGfAKA48d9E"
              alt="User avatar image of Eleanor Vance"
              fill
              className="object-cover"
              unoptimized
            />
          </Link>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#101618] dark:text-white hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <span className="material-symbols-outlined text-2xl">close</span>
            ) : (
              <span className="material-symbols-outlined text-2xl">menu</span>
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-b-[#f0f4f5] dark:border-b-[#1f2e33] py-4 px-6 sm:px-10">
            <nav className="flex flex-col space-y-4">
              <Link
                className="text-[#101618] dark:text-white text-sm font-medium leading-normal hover:text-primary py-2"
                href="/home"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className="text-[#101618] dark:text-white text-sm font-medium leading-normal hover:text-primary py-2"
                href="/find"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Properties
              </Link>
              <Link
                className="text-[#101618] dark:text-white text-sm font-medium leading-normal hover:text-primary py-2"
                href="/professionals"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Professionals
              </Link>
              <Link
                className="text-[#101618] dark:text-white text-sm font-medium leading-normal hover:text-primary py-2"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stories
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-[#f0f4f5] dark:border-[#1f2e33]">
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f4f5] dark:bg-white/10 text-[#101618] dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Notifications</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* SideNavBar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28">
              <div className="flex h-full min-h-[700px] flex-col justify-between bg-white dark:bg-[#0f1e23] rounded-lg p-6 border border-[#f0f4f5] dark:border-[#1f2e33]">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 overflow-hidden">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDhqxFbJVMHw2U1rL9O_yG23DHxRkCbARpbf_XXwrbfLaTVDMZoNUvW0RIXlr85oPYZPXbhxySbPKt8YOSh8ZjSwsh3oUSvNSvRx4dnGWv2nSkRrwCL8yzmU_Nt03qhhyelLqV_ZL79_8S5NmwckI2FQKQKD6EaNIB0EH0-jfd36ArTYVxm7vOz-kUXWE19QVa_jeip9xLukzdxyEDzMdoooDYOtneHmRRghAq-N17YmlmPbAotNyHrBOSmoNQUdIoA6kv_ZNCjRj-"
                        alt="User avatar image of Eleanor Vance"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-[#101618] dark:text-white text-xl font-bold leading-normal">Eleanor Vance</h1>
                      <p className="text-[#5e818d] dark:text-gray-400 text-sm font-normal leading-normal">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-4">
                    {sidebarItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
                          activeTab === item.id
                            ? "bg-primary/20 dark:bg-primary/30"
                            : "hover:bg-black/5 dark:hover:bg-white/5"
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-2xl ${
                            activeTab === item.id ? "text-primary" : "text-[#101618] dark:text-white"
                          }`}
                          style={item.filled && activeTab === item.id ? { fontVariationSettings: "'FILL' 1" } : undefined}
                        >
                          {item.icon}
                        </span>
                        <p
                          className={`text-sm font-medium leading-normal ${
                            activeTab === item.id
                              ? "text-primary font-bold"
                              : "text-[#101618] dark:text-white"
                          }`}
                        >
                          {item.label}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                  <span className="truncate">Edit Profile</span>
                </button>
              </div>
            </div>
          </aside>
          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="flex flex-col gap-6">
              {/* Tabs */}
              <div className="bg-white dark:bg-background-dark border border-stone-200 dark:border-stone-800 rounded-lg p-1">
                <div className="flex border-b border-[#dae3e7] dark:border-stone-700 px-4 gap-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 transition-colors ${
                        activeTab === tab.id
                          ? "border-b-primary text-primary"
                          : "border-b-transparent text-[#5e818d] dark:text-gray-400"
                      }`}
                    >
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab.label}</p>
                    </button>
                  ))}
                </div>
              </div>
              {/* Section: My Activity */}
              {activeTab === "activity" && (
                <div className="bg-white dark:bg-background-dark border border-stone-200 dark:border-stone-800 rounded-lg">
                  {/* SectionHeader */}
                  <h3 className="text-[#101618] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-6 pb-2 pt-5 border-b border-stone-200 dark:border-stone-800">
                    My Activity
                  </h3>
                  {/* Activity List */}
                  {activities.map((activity, index) => (
                    <div
                      key={activity.id}
                      className={`flex items-center gap-4 px-6 min-h-[72px] py-4 justify-between ${
                        index < activities.length - 1 ? "border-b border-stone-200 dark:border-stone-800" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-[#101618] dark:text-white flex items-center justify-center rounded-lg bg-[#f0f4f5] dark:bg-white/10 shrink-0 size-12">
                          <span className="material-symbols-outlined">{activity.icon}</span>
                        </div>
                        <div className="flex flex-col justify-center">
                          <p className="text-[#101618] dark:text-white text-base font-medium leading-normal line-clamp-1">
                            {activity.action}
                          </p>
                          <p className="text-[#5e818d] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <p className="text-[#5e818d] dark:text-gray-400 text-sm font-normal leading-normal">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* Section: Empty State Example */}
              {activeTab !== "activity" && (
                <div className="bg-white dark:bg-background-dark border border-stone-200 dark:border-stone-800 rounded-lg p-10 flex flex-col items-center justify-center text-center gap-4">
                  <div className="text-primary/40 dark:text-primary/50">
                    <svg
                      className="feather feather-archive"
                      fill="none"
                      height="80"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="21 8 21 21 3 21 3 8"></polyline>
                      <rect height="5" width="22" x="1" y="3"></rect>
                      <line x1="10" x2="14" y1="12" y2="12"></line>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-[#101618] dark:text-white">Nothing to see here yet</h4>
                  <p className="text-sm text-[#5e818d] dark:text-gray-400 max-w-sm">
                    When you save new items, they will appear in your &quot;Saved Items&quot; tab. Start exploring properties and professionals to build your collection.
                  </p>
                  <Link
                    href="/find"
                    className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary/20 dark:bg-primary/30 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors"
                  >
                    <span className="truncate">Explore Properties</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

