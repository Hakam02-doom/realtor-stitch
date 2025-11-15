"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ProfilePage() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("personal");

  useEffect(() => {
    if (pathname === "/dashboard") {
      setActiveTab("dashboard");
    } else if (pathname === "/profile") {
      setActiveTab("personal");
    } else if (pathname === "/privacy") {
      setActiveTab("privacy");
    }
  }, [pathname]);

  const menuItems = [
    { id: "dashboard", icon: "dashboard", label: "Dashboard", href: "/dashboard" },
    { id: "personal", icon: "person", label: "Personal Info", href: "/profile" },
    { id: "services", icon: "work", label: "Services", href: "#" },
    { id: "availability", icon: "event_available", label: "Availability", href: "#" },
    { id: "photos", icon: "photo_library", label: "Photos", href: "#" },
    { id: "privacy", icon: "info", label: "Privacy Policy", href: "/privacy" },
    { id: "settings", icon: "settings", label: "Account Settings", href: "#" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display bg-background-light dark:bg-background-dark">
      <div className="flex min-h-screen">
        {/* SideNavBar */}
        <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-[#0f0f0f] border-r border-gray-200 dark:border-gray-800 p-4 shrink-0">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzwpvdwReLT2vNA5MffSWgclVNuVXJ5K-Qq06SKxMyExI39zB9zJUQ36tOVASKChWu1Bsb7ty2MV8KAnm32wHfRIbKsdNt0BggfAvGZQS9Fv2LS_vqZ01DdhDPwMJpRezdrOos3pyG0A8796Hu8Dtzi0V6oOJgpFRVWdPJH2bFOp954O_GRqrgM5whx3r-MryEXulBMrb5i1HpKe3VgKugNIsXzujhu9Aew14LzMlQ2011fvD8OUDxFAU0QaniY3dcVWcTB5_5jW-C"
                  alt="User profile picture of Alex Doe"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[#1A1A1A] dark:text-white text-base font-medium leading-normal">Alex Doe</h1>
                <p className="text-[#6c757d] dark:text-gray-400 text-sm font-normal leading-normal">Interior Designer</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id;
                const className = `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary/20 text-primary dark:bg-primary/30"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`;
                const iconClassName = isActive ? "text-primary" : "text-[#1A1A1A] dark:text-gray-300";
                const textClassName = isActive
                  ? "text-primary"
                  : "text-[#1A1A1A] dark:text-gray-300";

                if (item.href) {
                  return (
                    <Link key={item.id} href={item.href} className={className}>
                      <span className={`material-symbols-outlined ${iconClassName}`}>{item.icon}</span>
                      <p className={`text-sm font-medium leading-normal ${textClassName}`}>{item.label}</p>
                    </Link>
                  );
                }
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={className}
                  >
                    <span className={`material-symbols-outlined ${iconClassName}`}>{item.icon}</span>
                    <p className={`text-sm font-medium leading-normal ${textClassName}`}>{item.label}</p>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-auto">
            <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-700 text-[#1A1A1A] dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">View Public Profile</span>
            </button>
          </div>
        </aside>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-[#0f0f0f] rounded-lg border border-gray-200 dark:border-gray-800 text-black dark:text-white"
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
          className={`md:hidden fixed left-0 top-0 h-full w-64 bg-white dark:bg-[#0f0f0f] border-r border-gray-200 dark:border-gray-800 p-4 shrink-0 z-50 transform transition-transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzwpvdwReLT2vNA5MffSWgclVNuVXJ5K-Qq06SKxMyExI39zB9zJUQ36tOVASKChWu1Bsb7ty2MV8KAnm32wHfRIbKsdNt0BggfAvGZQS9Fv2LS_vqZ01DdhDPwMJpRezdrOos3pyG0A8796Hu8Dtzi0V6oOJgpFRVWdPJH2bFOp954O_GRqrgM5whx3r-MryEXulBMrb5i1HpKe3VgKugNIsXzujhu9Aew14LzMlQ2011fvD8OUDxFAU0QaniY3dcVWcTB5_5jW-C"
                  alt="User profile picture of Alex Doe"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[#1A1A1A] dark:text-white text-base font-medium leading-normal">Alex Doe</h1>
                <p className="text-[#6c757d] dark:text-gray-400 text-sm font-normal leading-normal">Interior Designer</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id;
                const className = `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary/20 text-primary dark:bg-primary/30"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`;
                const iconClassName = isActive ? "text-primary" : "text-[#1A1A1A] dark:text-gray-300";
                const textClassName = isActive
                  ? "text-primary"
                  : "text-[#1A1A1A] dark:text-gray-300";

                if (item.href) {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={className}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className={`material-symbols-outlined ${iconClassName}`}>{item.icon}</span>
                      <p className={`text-sm font-medium leading-normal ${textClassName}`}>{item.label}</p>
                    </Link>
                  );
                }
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={className}
                  >
                    <span className={`material-symbols-outlined ${iconClassName}`}>{item.icon}</span>
                    <p className={`text-sm font-medium leading-normal ${textClassName}`}>{item.label}</p>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-auto">
            <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-700 text-[#1A1A1A] dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">View Public Profile</span>
            </button>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="max-w-4xl mx-auto">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-between gap-3 mb-6 sm:mb-8">
              <div className="flex w-full sm:min-w-72 flex-col gap-2">
                <p className="text-[#1A1A1A] dark:text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                  Personal Information
                </p>
                <p className="text-[#6c757d] dark:text-gray-400 text-base font-normal leading-normal">
                  Update your photo and personal details here.
                </p>
              </div>
            </div>
            {/* Profile Management Card */}
            <div className="bg-white dark:bg-[#0f0f0f] rounded-xl shadow-sm">
              {/* ProfileHeader */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex gap-4 items-center">
                    <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full w-24 h-24 overflow-hidden">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWz-v-3MoyvNaShqnMXhnwgN3_bXHUF1ZSjdFKVq_Vg8wtUug1x8RptZ0VSD0o1rM0wRKncL53um2KkmteTrdBz9Y_pwT_glErEYBQvX-qhlEcVNr4mb5ZDMx1QjWqzxYHKhtnHV7uT1yqvJyXcUm2yDamW_jCvplcmwIfnfXoZQSiNg9sz_6-vqUgN044SQiDi0EgwyZHUt3RjLJYyS9K1YIvsnXYz55rjBRQ04lbQ4mokafEfNZShIzzSojF2rR_xYFfNWiXhzke"
                        alt="User profile picture of Alex Doe"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[#1A1A1A] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                        Alex Doe
                      </p>
                      <p className="text-[#6c757d] dark:text-gray-400 text-base font-normal leading-normal">
                        Interior Designer
                      </p>
                    </div>
                  </div>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 text-[#1A1A1A] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] w-full sm:w-auto">
                    <span className="truncate">Upload new picture</span>
                  </button>
                </div>
              </div>
              {/* Form Section */}
              <form className="p-6 space-y-6">
                {/* TextFields: Full Name & Title */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col">
                    <p className="text-[#1A1A1A] dark:text-gray-300 text-base font-medium leading-normal pb-2">
                      Full Name
                    </p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-[#1A1A1A] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-[#1A1A1A] h-12 placeholder:text-[#6c757d] px-3.5 text-base font-normal leading-normal"
                      defaultValue="Alex Doe"
                    />
                  </label>
                  <label className="flex flex-col">
                    <p className="text-[#1A1A1A] dark:text-gray-300 text-base font-medium leading-normal pb-2">
                      Professional Title
                    </p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-[#1A1A1A] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-[#1A1A1A] h-12 placeholder:text-[#6c757d] px-3.5 text-base font-normal leading-normal"
                      defaultValue="Interior Designer"
                    />
                  </label>
                </div>
                {/* TextField: Bio */}
                <div className="flex flex-col">
                  <label className="text-[#1A1A1A] dark:text-gray-300 text-base font-medium leading-normal pb-2" htmlFor="bio">
                    Short Bio
                  </label>
                  <textarea
                    className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded text-[#1A1A1A] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-[#1A1A1A] min-h-36 placeholder:text-[#6c757d] p-3.5 text-base font-normal leading-normal"
                    id="bio"
                    defaultValue="Passionate interior designer with a flair for creating elegant and functional spaces. With over 10 years of experience, I specialize in modern and minimalist designs that reflect the personality of my clients."
                  ></textarea>
                </div>
                {/* TextField: Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col">
                    <p className="text-[#1A1A1A] dark:text-gray-300 text-base font-medium leading-normal pb-2">Location</p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-[#1A1A1A] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-[#1A1A1A] h-12 placeholder:text-[#6c757d] px-3.5 text-base font-normal leading-normal"
                      placeholder="e.g., San Francisco, CA"
                    />
                  </label>
                </div>
                {/* Social Links */}
                <div>
                  <p className="text-[#1A1A1A] dark:text-gray-300 text-base font-medium leading-normal pb-2">Social Links</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#6c757d] dark:text-gray-400">link</span>
                      <input
                        className="form-input flex-1 rounded text-[#1A1A1A] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-[#1A1A1A] h-12 placeholder:text-[#6c757d] px-3.5"
                        placeholder="Website URL"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-[#6c757d] dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
                      </svg>
                      <input
                        className="form-input flex-1 rounded text-[#1A1A1A] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-[#1A1A1A] h-12 placeholder:text-[#6c757d] px-3.5"
                        placeholder="Twitter Profile URL"
                      />
                    </div>
                  </div>
                </div>
              </form>
              {/* Footer Actions */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-800">
                <button className="flex w-full sm:min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 text-[#1A1A1A] dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Cancel</span>
                </button>
                <button className="flex w-full sm:min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

