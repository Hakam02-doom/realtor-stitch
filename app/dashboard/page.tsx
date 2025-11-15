"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DashboardPage() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("dashboard");

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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen font-display bg-background-light dark:bg-background-dark text-gray-900 dark:text-white">
      {/* SideNavBar */}
      <aside className="hidden md:flex w-64 flex-shrink-0 bg-white dark:bg-black/20 p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center p-2">
            <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbY2JoTrm614mKwoC8VTFARFQMICgFrYHAnZZplmbrjyecLBKXZtKyM7U7msVo0GdUJ2o4beCwsQT24GuBmVJr6OagCNvGKPEOFjerQAEIPYBUav_xb3_Ac1DwUe43zfRcFK3UDRYkF286yR00tJPu6X3opnUwGIdsWYmxanM0oTCC50gRxDrAmTsnDSG8a727Mt8-b8346wxrd7ygVzlaY93C40TIQ0aicnHAtUE8dPKewF85p_F7ICjqZRNggtit-zXBRBWPtZx5"
                alt="Profile picture of Catherine Miller"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-black dark:text-white text-base font-medium leading-normal">Catherine Miller</h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Realtor Professional</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              const className = `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/20 text-primary"
                  : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              }`;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveTab(item.id)}
                  className={className}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <p className="text-sm font-medium leading-normal">{item.label}</p>
                </Link>
              );
            })}
          </nav>
        </div>
        <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
          <span className="truncate">Add New Service</span>
        </button>
      </aside>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-black/20 rounded-lg border border-gray-200 dark:border-gray-800 text-black dark:text-white"
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined">{isMobileMenuOpen ? "close" : "menu"}</span>
      </button>
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
      {/* Mobile Sidebar */}
      <aside
        className={`md:hidden fixed left-0 top-0 h-full w-64 bg-white dark:bg-black/20 p-4 flex flex-col justify-between z-50 transform transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center p-2">
            <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbY2JoTrm614mKwoC8VTFARFQMICgFrYHAnZZplmbrjyecLBKXZtKyM7U7msVo0GdUJ2o4beCwsQT24GuBmVJr6OagCNvGKPEOFjerQAEIPYBUav_xb3_Ac1DwUe43zfRcFK3UDRYkF286yR00tJPu6X3opnUwGIdsWYmxanM0oTCC50gRxDrAmTsnDSG8a727Mt8-b8346wxrd7ygVzlaY93C40TIQ0aicnHAtUE8dPKewF85p_F7ICjqZRNggtit-zXBRBWPtZx5"
                alt="Profile picture of Catherine Miller"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-black dark:text-white text-base font-medium leading-normal">Catherine Miller</h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Realtor Professional</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              const className = `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/20 text-primary"
                  : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              }`;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={className}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <p className="text-sm font-medium leading-normal">{item.label}</p>
                </Link>
              );
            })}
          </nav>
        </div>
        <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
          <span className="truncate">Add New Service</span>
        </button>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* PageHeading */}
          <header className="flex flex-wrap justify-between items-center gap-4 mb-6 sm:mb-8">
            <div className="flex w-full sm:min-w-72 flex-col gap-1">
              <p className="text-black dark:text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                Welcome, Catherine!
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                Here&apos;s a summary of your activity today.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/activity" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10">
                <span className="material-symbols-outlined text-black dark:text-white">notifications</span>
              </Link>
              <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAONlz8ak_OlZ8Lk8ConRJIReItVexNuxsiBrXJj6Cp38bO7u2YDOjY92jtOUkWCa-MoJR4Ct871vTAqhV91ahqAZA46_mVGUMpRM6Dji2DZ-U7hjk2AHiQvMXMPDJ5W9V5WytnPYIjBhzzNq5xolW3wHKqDeRfxsFJ8c34IM6AoxZBVbLlp2FiRpGU1uVe_Kgr7x8IbjC7-mZNpNwDlfDqf1KrF_goma1HjDAEg0BJO4_aT3UL9zB8-Dl-G68j8phdhO7cs7IEDt84"
                  alt="Profile picture of Catherine Miller"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </header>
          {/* Stats */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10">
              <p className="text-black dark:text-white text-base font-medium leading-normal">Total Earnings</p>
              <p className="text-black dark:text-white tracking-light text-3xl font-bold leading-tight">$12,850</p>
              <p className="text-green-600 text-sm font-medium leading-normal">+5.2%</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10">
              <p className="text-black dark:text-white text-base font-medium leading-normal">New Service Requests</p>
              <p className="text-black dark:text-white tracking-light text-3xl font-bold leading-tight">8</p>
              <p className="text-green-600 text-sm font-medium leading-normal">+12%</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10">
              <p className="text-black dark:text-white text-base font-medium leading-normal">Appointments This Week</p>
              <p className="text-black dark:text-white tracking-light text-3xl font-bold leading-tight">5</p>
              <p className="text-red-600 text-sm font-medium leading-normal">-10%</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10">
              <p className="text-black dark:text-white text-base font-medium leading-normal">Client Rating</p>
              <p className="text-black dark:text-white tracking-light text-3xl font-bold leading-tight">4.9/5</p>
              <p className="text-green-600 text-sm font-medium leading-normal">+0.1</p>
            </div>
          </section>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Charts */}
            <section className="xl:col-span-2 bg-white dark:bg-black/20 p-6 rounded-xl border border-gray-200 dark:border-white/10">
              <div className="flex flex-col gap-2">
                <p className="text-black dark:text-white text-lg font-medium leading-normal">Earnings This Month</p>
                <p className="text-black dark:text-white tracking-light text-[32px] font-bold leading-tight truncate">
                  $8,450
                </p>
                <div className="flex gap-2">
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">vs. Last 30 Days</p>
                  <p className="text-green-600 text-sm font-medium leading-normal">+15.8%</p>
                </div>
                <div className="h-64 mt-4 grid grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-primary/20 dark:bg-primary/30 w-full rounded-t-lg" style={{ height: "40%" }}></div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-bold leading-normal tracking-[0.015em]">
                      Week 1
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-primary/20 dark:bg-primary/30 w-full rounded-t-lg" style={{ height: "60%" }}></div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-bold leading-normal tracking-[0.015em]">
                      Week 2
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-primary w-full rounded-t-lg" style={{ height: "85%" }}></div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-bold leading-normal tracking-[0.015em]">
                      Week 3
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-primary/20 dark:bg-primary/30 w-full rounded-t-lg" style={{ height: "40%" }}></div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-bold leading-normal tracking-[0.015em]">
                      Week 4
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Upcoming Appointments */}
            <section className="xl:col-span-1 bg-white dark:bg-black/20 p-6 rounded-xl border border-gray-200 dark:border-white/10">
              <h2 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
                Upcoming Appointments
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5">
                  <div className="bg-primary/20 text-primary p-3 rounded-lg">
                    <span className="material-symbols-outlined">event</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-black dark:text-white">Alex Johnson</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Home Valuation - 10:00 AM</p>
                  </div>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Today</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5">
                  <div className="bg-primary/20 text-primary p-3 rounded-lg">
                    <span className="material-symbols-outlined">event</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-black dark:text-white">Maria Garcia</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Property Showing - 2:30 PM</p>
                  </div>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Today</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5">
                  <div className="bg-primary/20 text-primary p-3 rounded-lg">
                    <span className="material-symbols-outlined">event</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-black dark:text-white">David Chen</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Consultation Call - 9:00 AM</p>
                  </div>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Tomorrow</span>
                </div>
                <a className="text-primary text-sm font-bold text-center block mt-4 hover:underline" href="#">
                  View Full Calendar
                </a>
              </div>
            </section>
          </div>
          {/* Recent Service Requests */}
          <section className="mt-8 bg-white dark:bg-black/20 p-6 rounded-xl border border-gray-200 dark:border-white/10">
            <h2 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
              Recent Service Requests
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-white/10">
                    <th className="p-3 font-medium text-gray-500 dark:text-gray-400">Client Name</th>
                    <th className="p-3 font-medium text-gray-500 dark:text-gray-400">Service</th>
                    <th className="p-3 font-medium text-gray-500 dark:text-gray-400">Date Requested</th>
                    <th className="p-3 font-medium text-gray-500 dark:text-gray-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5">
                    <td className="p-3 text-black dark:text-white">Samantha Lee</td>
                    <td className="p-3 text-gray-600 dark:text-gray-300">Market Analysis</td>
                    <td className="p-3 text-gray-600 dark:text-gray-300">Oct 26, 2023</td>
                    <td className="p-3 text-right">
                      <div className="flex gap-2 justify-end">
                        <button className="px-3 py-1 text-xs font-semibold text-black dark:text-white bg-gray-200 dark:bg-white/10 rounded-md hover:bg-gray-300 dark:hover:bg-white/20">
                          Decline
                        </button>
                        <button className="px-3 py-1 text-xs font-semibold text-white bg-primary rounded-md hover:bg-primary/90">
                          Accept
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5">
                    <td className="p-3 text-black dark:text-white">James Wilson</td>
                    <td className="p-3 text-gray-600 dark:text-gray-300">Listing Photography</td>
                    <td className="p-3 text-gray-600 dark:text-gray-300">Oct 25, 2023</td>
                    <td className="p-3 text-right">
                      <div className="flex gap-2 justify-end">
                        <button className="px-3 py-1 text-xs font-semibold text-black dark:text-white bg-gray-200 dark:bg-white/10 rounded-md hover:bg-gray-300 dark:hover:bg-white/20">
                          Decline
                        </button>
                        <button className="px-3 py-1 text-xs font-semibold text-white bg-primary rounded-md hover:bg-primary/90">
                          Accept
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-white/5">
                    <td className="p-3 text-black dark:text-white">Emily Rodriguez</td>
                    <td className="p-3 text-gray-600 dark:text-gray-300">Home Staging</td>
                    <td className="p-3 text-gray-600 dark:text-gray-300">Oct 24, 2023</td>
                    <td className="p-3 text-right">
                      <div className="flex gap-2 justify-end">
                        <button className="px-3 py-1 text-xs font-semibold text-black dark:text-white bg-gray-200 dark:bg-white/10 rounded-md hover:bg-gray-300 dark:hover:bg-white/20">
                          Decline
                        </button>
                        <button className="px-3 py-1 text-xs font-semibold text-white bg-primary rounded-md hover:bg-primary/90">
                          Accept
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

