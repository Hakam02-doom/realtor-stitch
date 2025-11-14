"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProfessionalsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Home Inspectors",
    "Mortgage Brokers",
    "Lawyers",
    "Photographers",
    "Home Stagers",
    "Movers",
  ];

  const professionals = [
    {
      id: 1,
      name: "Johnathan Mills",
      title: "Mortgage Broker",
      rating: 4.9,
      reviews: 128,
      description: "Expert mortgage advice to help you secure the best financing for your dream home. Over 15 years of experience in the industry.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSaBGrgRns2ciqZWLRkukUwDqZgLbUlNUEY_qOu2CPpDRcq9TFE1BP2nZd6Rd-4C8NZhJAAT6WUrMIwRyxVXSNCu2TYUAgcgo36oCDfESCNMvHOHNR1E8eOxHqc3AujJxeL9rc3StwCYnI5kKhz9WVZSPb1yv5BH3hX7Ypu-wXCMStJAy1Pc1wNyp9Cnm4tl8giOOxoPR23JpqWQNRWWAlPSYCvaO-LCkS0yoJOEZLZMceSLZIM6t8DzUD0QDNi4fMxYiTd9CHWOP8",
      alt: "Profile picture of Johnathan Mills",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      title: "Home Inspector",
      rating: 5.0,
      reviews: 97,
      description: "Providing thorough and unbiased home inspections to ensure you make an informed buying decision. Certified and insured.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX92y7J5m3csR4BPRUT_paFaovaf5igq9mJqZItgxP8k8hk4mBgQdhQOxChfJifPIe3SyrEcFHDmqfU0_rE1kLPSLEGwl3zkenN-akQyxkivdMySwpg4OaLQgM9SHhSntiLO96KnpLbpBriCiM5gZQYy5OdYzvUXcWAhl208qtbbA_x4McJ_XKllu7bHjmtytUCB8UAD7Q9fPhuuY3pHdIBhhgqV89HGBzekarsGDz5rIOR2OjmEj19SESg16EtCN10MCL8jnvsgsO",
      alt: "Profile picture of Sarah Jenkins",
    },
    {
      id: 3,
      name: "David Chen",
      title: "Real Estate Lawyer",
      rating: 4.8,
      reviews: 210,
      description: "Guiding clients through the complexities of real estate transactions with clarity and confidence. Your trusted legal partner.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJqO4g4AJYN8isR0PA46UY47GI_m8ELpJ50tE-fuT0vjd3xtVAzqriaq_Xam65dSNDd8Z5BQb6SjtK8AXGKRLAzlOeBWMobvQom5iX80tNJt2v4PqGWo5LBllqh6LSA31dgCQWw2pUSXnn2F0HV5yATFolDJDh3rEuI04OWTD6uyIxZTTLIv1V9U-cD7-peQY20pJW3iId-18NLoOfiF1OyrxZt4maYuYBtU7ycS7KmLpO-X6At_My3eFswVDWRdzRe5GexZP7wz3m",
      alt: "Profile picture of David Chen",
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      title: "Photographer",
      rating: 4.9,
      reviews: 85,
      description: "Capturing stunning, high-quality images that showcase properties at their absolute best to attract potential buyers.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJKce9HRLQNr_d1hdljT7hzQQn9wL5HfEP2URCgW3oBWr15AG1I3sTBjyCGaob3Z1nLs40Wlmay2yblvBs6Mssh_NmI2wSgDFn1ose-AH377PNQAb7fdV0TbIJjJllYnmv5RylXrHUjY99Z47E9GqfyjYgh3SsPo7VBBYDgX6aDrGFKUGGZFkJX9p0_K54PA5NtF6mf5rRxgRx4laRkhQSJd5RKRyoDIv95LptfH5LS9KQ2rd_ZrdZBy2BB2G87gqInLpsXAXGLYIT",
      alt: "Profile picture of Maria Rodriguez",
    },
    {
      id: 5,
      name: "Kevin Lee",
      title: "Home Stager",
      rating: 4.7,
      reviews: 64,
      description: "Transforming homes to maximize their appeal and value, helping you sell faster and for a better price. Free consultations available.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALWvAgVHKOVWyZLm5LZOUnBbqODIo0mSDUtKgDLQAcVQb-El7nE1VqdXO2MQ4lJdW_0L4xD9iOYd9wWc9D1ALFwNN2CfuTuVcajfa3P-ax6nGaH6WeH7SsiNYNljba5lm5PEj_Ggrs7vCoCYbPHoNT-B4FnRetvheSkIjkMCiq5_ENNSi4nOrEuMvnmJOn_8cMT96yzNsW8tYerh0leD5yhEm_f9e3w6wj56zlUBLKwtaWzhW8-KNzX8dt69jZKF5GhdJSjMDbXUj5",
      alt: "Profile picture of Kevin Lee",
    },
    {
      id: 6,
      name: "Emily Carter",
      title: "Moving Company",
      rating: 4.9,
      reviews: 152,
      description: "Reliable, efficient, and careful moving services for a stress-free transition to your new home. Local and long-distance moving.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIz1Cj6spnur3tvM1dCKxiOADbsAJBKiJCsPS6Wgsr8YCJctKXVpl5KUgAB-eqJz2EAiT2O1MDB6YAmlJrZKkz0YB3aVMjixh9oJ7hI2lalj4dN6vI0nf6YMpSRNAviTf3eyz_5EE-E9WqIuVvK7SeiqPmMaQ1uFLcrcr0zCqbTKifr0PHbAL3Nf0zTzFzFTqL_UTpipaXl_XhYoxAAzeRhZaGBJ7EPUDJFEcnrUlH0U0xh83ViNchZO0Jvx--ymPo5Xr_CJtVMwlt",
      alt: "Profile picture of Emily Carter",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <nav className="container mx-auto flex items-center justify-between whitespace-nowrap px-6 py-3">
          <Link href="/home" className="flex items-center gap-4 text-black dark:text-white">
            <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
            </svg>
            <h2 className="text-xl font-bold tracking-[-0.015em]">Realtor Pro</h2>
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-black dark:text-gray-300">
            <Link className="hover:text-primary transition-colors" href="#">
              Realtor Services
            </Link>
            <Link className="text-primary font-semibold" href="/professionals">
              Browse Professionals
            </Link>
            <Link className="hover:text-primary transition-colors" href="#">
              Stories
            </Link>
            <Link className="hover:text-primary transition-colors" href="#">
              About Us
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <span className="truncate">Log In</span>
            </Link>
            <Link href="/signup" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Sign Up</span>
            </Link>
            <Link href="/profile" className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 hidden sm:block relative overflow-hidden cursor-pointer">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqQ6WXL2Cy6jpUHeZNIKrC9aGXPhN7ddGs65MmbcIuXrAQ7B7YrlIvqY5XcWK-uacPYg9glRxB-IxD7-WkeK79eJ3wRXIObATyJWLQK4xfeAy7wpbG49q3PxIQ9--T3o4LQRXXSSNdfyBcIAb-Lb0L9orI6__v9Z2yDSOBxoggySY8sUwaTp32nGIL97gNOuydxB107Nx-1T5tSqXXAq49hIFFvp3Pdz4mvns40iWjyGqWTRZp2eBJDxNXa3Jxc9y3eB8CZIjpGZ9H"
                alt="User profile picture"
                fill
                className="object-cover"
                unoptimized
              />
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-black dark:text-white hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <span className="material-symbols-outlined text-2xl">close</span>
            ) : (
              <span className="material-symbols-outlined text-2xl">menu</span>
            )}
          </button>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4 px-6">
            <nav className="flex flex-col space-y-4">
              <Link
                className="text-black dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors py-2"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Realtor Services
              </Link>
              <Link
                className="text-primary font-semibold text-sm py-2"
                href="/professionals"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse Professionals
              </Link>
              <Link
                className="text-black dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors py-2"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stories
              </Link>
              <Link
                className="text-black dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors py-2"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                <Link href="/login" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  <span className="truncate">Log In</span>
                </Link>
                <Link href="/signup" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                  <span className="truncate">Sign Up</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
      <main className="container mx-auto px-6 py-10 flex-grow">
        {/* Hero Section with PageHeading and SearchBar */}
        <section className="mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-black dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Find Professional Services for Your Home
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg mt-3">
              Search by name, service, or location to connect with top-rated experts.
            </p>
          </div>
          <div className="mt-8 max-w-2xl mx-auto">
            <label className="flex flex-col min-w-40 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-14 shadow-sm bg-white dark:bg-background-dark">
                <div className="text-gray-500 dark:text-gray-400 flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-black dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-2 text-base font-normal leading-normal"
                  placeholder="Search by name, service, or location..."
                  defaultValue=""
                />
                <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold m-2 hover:bg-primary/90 transition-colors">
                  <span className="truncate">Search</span>
                </button>
              </div>
            </label>
          </div>
        </section>
        {/* Category Chips */}
        <section className="mb-10">
          <div className="flex items-center justify-center flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors ${
                  selectedCategory === category
                    ? "bg-primary/20 text-primary"
                    : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                <p
                  className={`text-sm font-medium leading-normal ${
                    selectedCategory === category
                      ? "text-primary"
                      : "text-black dark:text-white"
                  }`}
                >
                  {category}
                </p>
              </button>
            ))}
          </div>
        </section>
        {/* Professionals Grid */}
        <section>
          {/* Section Header with Sort Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="text-black dark:text-white text-2xl font-bold tracking-tight">Top Rated Professionals</h2>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400" htmlFor="sort-by">
                Sort by:
              </label>
              <select
                className="form-select rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm focus:border-primary focus:ring-primary"
                id="sort-by"
              >
                <option>Top Rated</option>
                <option>Most Reviewed</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((professional) => (
              <div
                key={professional.id}
                className="bg-white dark:bg-background-dark rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={professional.image}
                        alt={professional.alt}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black dark:text-white">{professional.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{professional.title}</p>
                      <div className="flex items-center mt-1">
                        <span className="material-symbols-outlined text-yellow-400 !text-[20px]">star</span>
                        <span className="ml-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {professional.rating}
                        </span>
                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                          ({professional.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{professional.description}</p>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:bg-primary/90 transition-colors">
                    <span className="truncate">View Profile</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Controls */}
          <div className="mt-12 flex justify-center items-center gap-2">
            <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-white transition-colors text-sm font-bold">
              1
            </button>
            <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-600 dark:text-gray-300 text-sm font-medium">
              2
            </button>
            <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-600 dark:text-gray-300 text-sm font-medium">
              3
            </button>
            <span className="text-gray-500 dark:text-gray-400">...</span>
            <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-600 dark:text-gray-300 text-sm font-medium">
              10
            </button>
            <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

