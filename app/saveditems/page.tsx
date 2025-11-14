"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SavedItemsPage() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("saved");
  const [activeView, setActiveView] = useState("grid");
  const [savedTab, setSavedTab] = useState("properties");

  useEffect(() => {
    if (pathname === "/dashboard") {
      setActiveTab("dashboard");
    } else if (pathname === "/appearance") {
      setActiveTab("appearance");
    } else if (pathname === "/saveditems") {
      setActiveTab("saved");
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
    { id: "personal", icon: "person", label: "Profile", href: "/profile" },
  ];

  const savedProperties = [
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_dbiLW6yXXLpOTKdxofRvUXMnEXuvNWtideb2lJgDRd7KKAy-QdBBrGDtzXJXQmKTEup4JgK5EOK_GbkiYktKaB5f_98w9BO9MVuOWRPp4zVkVgwCQICRlj191wPc9MlGKlXQXeJY3J040bFI4JfjAASVGMc_ZcuqTRMkQ7U_nn2yzBDLAj4CJp2sxogEvRFddjQ5IyKYR1XaWsUdOTPekxQij_M_cp8EcXYCGdgBu64b9kusUhqTVJbvcEkJbyZMiRleILjK2M2",
      alt: "Modern house with a large front yard and swimming pool",
      address: "123 Maple Street",
      location: "Sunnyvale, CA 94086",
      price: "$2,550,000",
      details: "3 beds, 2 baths, 1,800 sqft",
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBee0cY3mDTdA4WAieFw6bKBClpMlE00JFjhZcZTWFKw-IJLpcp-3BUjX8_W_Bv-pQzHyiBIKiHU_YolciNnRScKexGyEMH43EcvuqOTIpic86qbqQ7hfL_U3PvorOoxx71CfC3qYt-IcU0Qd7aLy19zzNLAXrB_HXARVPzaVkRbqhacUJ0ANauCZGKigvF-G-U32UW5PuQf5nVd8ejmYvo6oxJMh-fYXyKUZjg6_dx-USu3GvG8aunyoTVm9drO0-yeGDVYkGuDYVH",
      alt: "Cozy suburban home with a two-car garage",
      address: "456 Oak Avenue",
      location: "Austin, TX 78701",
      price: "$720,000",
      details: "4 beds, 3 baths, 2,500 sqft",
    },
    {
      id: 3,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdWLJQbSD5OHSHKIhVteXXl1BGHtLxDRMet2sMsxHKItbQKvF6jm5dJmlVoL67o3_l2lLUBcvKWwJ_-fPxsFONAZKoj4UKgnrNWtCh6fEVt5jz2QBInTaQTOW9yx6xvdsrOHZQk_kuiIOXH5vD1Dlsw4PBIp2X2khsoZOsR_M_JezjgSuPhFee4isVpSatbyRNQTw6mSCLELv7c691sB1qKHuor77VLUwbZSmew5Lez2YqoT5FHHKAfNkM3xQp7I-PCR0rVU8eVqBw",
      alt: "Luxury city apartment with floor-to-ceiling windows",
      address: "789 Pine Lane",
      location: "Miami, FL 33101",
      price: "$1,480,000",
      details: "3 beds, 2 baths, 1,950 sqft",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full font-display bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100">
      {/* SideNavBar */}
      <aside className="flex flex-col w-64 bg-white dark:bg-gray-900/50 p-4 border-r border-gray-200 dark:border-gray-800 shrink-0">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary flex items-center justify-center rounded-lg size-10">
            <span className="material-symbols-outlined text-white">real_estate_agent</span>
          </div>
          <Link href="/home" className="text-xl font-bold text-gray-900 dark:text-white">
            Realtorly
          </Link>
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined ${isActive ? "fill" : ""}`}
                    style={
                      isActive
                        ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
                        : undefined
                    }
                  >
                    {item.icon}
                  </span>
                  <p className="text-sm font-medium">{item.label}</p>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
              <span className="truncate">Post a Listing</span>
            </button>
            <div className="flex flex-col gap-1">
              <a
                className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                href="#"
              >
                <span className="material-symbols-outlined">settings</span>
                <p className="text-sm font-medium">Settings</p>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                href="#"
              >
                <span className="material-symbols-outlined">help</span>
                <p className="text-sm font-medium">Help</p>
              </a>
              <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>
              <div className="flex items-center gap-3 p-2">
                <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwqdcHd2iKBCm4cMUVL15vpAcyU2TacSyY85739yFiYrOBjTXLgkqUgBg-9SJ-mWFh8AYiQkbL5kN4JhcUiuhJ97pEalDgrSuzWo4MGIR48fcFFKrl8qGx_YdNqYqm1bd0ibH7eKxKZYYtE7mvkTY2kBrZ6PSjeCLGlITa2vAA2WTkBIglox_Sq8vtC8a5-eTFz1iOdTQibMqIlrmd0yv7qdrt2jbs4VSrUtTuoptVW7IH38DqQiw2wFzd20rlX0nebyrGCBj7yir6"
                    alt="Profile picture of John Doe"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-gray-900 dark:text-white text-sm font-semibold">John Doe</h1>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">john.doe@email.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* PageHeading */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <p className="text-gray-900 dark:text-white text-4xl font-black tracking-tight">My Saved Items</p>
          </div>
          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-8">
              <button
                onClick={() => setSavedTab("properties")}
                className={`flex items-center justify-center border-b-[3px] pb-3 pt-1 transition-colors ${
                  savedTab === "properties"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                }`}
              >
                <p className="text-sm font-bold">Saved Properties</p>
              </button>
              <button
                onClick={() => setSavedTab("professionals")}
                className={`flex items-center justify-center border-b-[3px] pb-3 pt-1 transition-colors ${
                  savedTab === "professionals"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                }`}
              >
                <p className="text-sm font-bold">Saved Professionals</p>
              </button>
            </div>
          </div>
          {/* Search and Filter */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-6">
            {/* SearchBar */}
            <div className="flex-1 min-w-[280px]">
              <label className="flex flex-col h-12 w-full max-w-lg">
                <div className="flex w-full flex-1 items-stretch rounded-lg">
                  <div className="text-gray-500 dark:text-gray-400 flex bg-white dark:bg-gray-800/50 items-center justify-center pl-4 rounded-l-lg border border-gray-200 dark:border-gray-700 border-r-0">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 border-l-0 text-sm font-normal"
                    placeholder="Search by address or keyword..."
                    defaultValue=""
                  />
                </div>
              </label>
            </div>
            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveView("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  activeView === "grid"
                    ? "bg-primary/20 text-primary"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button
                onClick={() => setActiveView("list")}
                className={`p-2 rounded-lg transition-colors ${
                  activeView === "list"
                    ? "bg-primary/20 text-primary"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <span className="material-symbols-outlined">list</span>
              </button>
            </div>
          </div>
          {/* ImageGrid (Saved Properties) */}
          {savedTab === "properties" && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
              {savedProperties.map((property) => (
                <div
                  key={property.id}
                  className="flex flex-col bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                    data-alt={property.alt}
                    style={{ backgroundImage: `url("${property.image}")` }}
                  ></div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-black dark:text-white text-lg font-bold">{property.address}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{property.location}</p>
                    <p className="text-primary text-xl font-bold mt-2">{property.price}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{property.details}</p>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2">
                      <Link
                        href="/details"
                        className="flex-1 text-center py-2 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
                      >
                        View Details
                      </Link>
                      <button className="py-2 px-4 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {/* Empty State Card */}
              <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-8 min-h-[300px]">
                <div className="flex items-center justify-center size-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                  <span className="material-symbols-outlined text-3xl text-gray-500 dark:text-gray-400">home</span>
                </div>
                <p className="text-black dark:text-white font-bold text-lg">No saved properties yet</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm text-center mt-1">
                  Start browsing and save properties you love!
                </p>
                <Link
                  href="/find"
                  className="mt-4 py-2 px-5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
                >
                  Browse Properties
                </Link>
              </div>
            </div>
          )}
          {/* Saved Professionals Tab */}
          {savedTab === "professionals" && (
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-8 min-h-[300px]">
              <div className="flex items-center justify-center size-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                <span className="material-symbols-outlined text-3xl text-gray-500 dark:text-gray-400">group</span>
              </div>
              <p className="text-black dark:text-white font-bold text-lg">No saved professionals yet</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm text-center mt-1">
                Start browsing and save professionals you love!
              </p>
              <Link
                href="/professionals"
                className="mt-4 py-2 px-5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
              >
                Browse Professionals
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

