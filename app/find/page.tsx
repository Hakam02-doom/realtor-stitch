"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FindPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedBedrooms, setSelectedBedrooms] = useState("Any");
  const [selectedBathrooms, setSelectedBathrooms] = useState("Any");
  const [favoriteProperties, setFavoriteProperties] = useState<Set<number>>(new Set([1]));

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favoriteProperties);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavoriteProperties(newFavorites);
  };

  const properties = [
    {
      id: 1,
      price: "$550,000",
      address: "123 Maple Street, Springfield, IL",
      beds: 3,
      baths: 2,
      sqft: "1,800 sqft",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyzfn_r_30aBBdoj81CvHoA8nQG55u0R_Jqs9fntWE0eUDTX9_11WDYa3TUaYwXVAjVjlr6zU51tQ7S8DsS0RJSRpcbEmLYbo2B55MJ46AOdtFiFDl3-TLx7AvJ0UEt39PHnWORVuwz2EMq9KmH0GdWpQpP-5VqG2M6RaJ-UWJdYajuAXO8Ap4CUbyFmpH0lBFBBOfZ9ARIWKYMquGo7jr-tHBwVOy10PPr6MpFG1uqTSK61vx7EcUcoMhT1Ml_3JHYVvHyaep9x3B",
      alt: "Exterior of a modern suburban house with a well-kept lawn.",
    },
    {
      id: 2,
      price: "$720,000",
      address: "456 Oak Avenue, Greenville, SC",
      beds: 4,
      baths: 3,
      sqft: "2,400 sqft",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7i4UuuyhY0KSGRvlm6N9TCu1peGG2sv0USYIOI5tInm6kZ2tFR6yc-B7NMMrfiEX3j4IURIwD6dtUuTNOh_BfNd2mL8VeFZCrLDlaVkTUa0ES6PAQ_18XEPr2gwm1GNGpa3MujMfqBvLSUcdtH_kNGHGep-lnd4fmqsB-Cs259bw42vlwkY3UjZtgJEm0p73dIrZi58YKghSv2ta_FYjFyhiFFQWAeksQqtBl7YeBSOVr9CuwY7Fp6J6laExgZTlElqzgvF_EYx4S",
      alt: "Front view of a two-story modern family home.",
    },
    {
      id: 3,
      price: "$1,250,000",
      address: "789 Pine Lane, Austin, TX",
      beds: 5,
      baths: 4.5,
      sqft: "4,100 sqft",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlYdckwpUitlZ5-AkQtcwtCD771nM3R9xT7Y8uKTPMHVLR7WRkjR4FHKWW5uqJELGG78T11hnsmcws3tyFqFEhLtfbbU6hJOORNSBFfajZOKCggoxQl_4sQR--4YCO7RP1KX70BwKilOsYxAEc_jo4ZOsxQ54Eu1BZqkJ4FII0rLOLtroFLfz1rc0Gc1sIchP2Nz9Hr0ES22YWDENDgUqckdQTwfX_8OBrWosGimON3qrVWVMpkce9RfZNvDs3LpWFyMfIiFXvmJKA",
      alt: "Luxury home with large windows and a swimming pool.",
    },
    {
      id: 4,
      price: "$480,000",
      address: "101 Birch Road, Denver, CO",
      beds: 3,
      baths: 2,
      sqft: "1,650 sqft",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjFPhfN8ORaBqjGpX0SFp2aKeDGZMH1w9rWFSuiljI_hq5FFG-i2pcLGAQtnebjmLHSEGRjGsr_-h2UTMdUwL-6IAdkRtFMpN_5kar3azTWQ79Hh3ZUW1lYsPnKMfHvYDMLQXxW-bU2gqVC6pufAqnntnQIrivO_RD2YafGLWV8swYE_8nAPtlYy4w6cHSN-m8CHUOcOk3p3LOpGTzMRXBiMOjivFllRFKy5up-gTXTyO5zTdL7bU0qC4KPK_nX5U2RgkC0S40fxTM",
      alt: "Cozy single-family home with a porch.",
    },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark/80 dark:backdrop-blur-sm border-b border-solid border-b-[#f0f4f5] dark:border-b-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between whitespace-nowrap py-3">
          <div className="flex items-center gap-4">
            <Link href="/home" className="flex items-center gap-4">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
              <h2 className="text-[#101618] dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em]">
                Realtor Services
              </h2>
            </Link>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-center gap-8">
            <div className="flex items-center gap-9">
              <Link
                className="text-[#101618] dark:text-gray-300 dark:hover:text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                Buy
              </Link>
              <Link
                className="text-[#101618] dark:text-gray-300 dark:hover:text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                Rent
              </Link>
              <Link
                className="text-[#101618] dark:text-gray-300 dark:hover:text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                Professional Services
              </Link>
              <Link
                className="text-[#101618] dark:text-gray-300 dark:hover:text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                Stories
              </Link>
            </div>
            <div className="flex items-center gap-2">
                <Link href="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                  <span className="truncate">Log In</span>
                </Link>
              <Link href="/signup" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f4f5] dark:bg-gray-800 text-[#101618] dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="truncate">Sign Up</span>
              </Link>
              <Link href="/profile" className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 relative overflow-hidden cursor-pointer">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqlhHFRxVRcqVYwoQFMUaR5u7JncMll8vTFjddqOYwv9RtpqexTcdQ9oW_WJTvG6cc87lc6pakmv9uFRZHVJxkhRmmIpXbCoAq-2Gqi6JcY1HGqyN0XreUVvhoLx4xm__nPuxlAWoHm6WnU8dlptMiUMILIjVGzy5OHUTVolBrFrul1sy-0HdG7uomSbNy76awhAe5IIuq1qZdbFP5-bHBtjgSVDpI4PxP_p2Qd-XTLgrreBqZ0tXmH5lBU_RJf1k5pv90hSgvxYOM"
                  alt="User profile picture"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </Link>
            </div>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-[#101618] dark:text-gray-300 hover:text-primary transition-colors"
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
          <div className="lg:hidden border-t border-[#f0f4f5] dark:border-gray-800 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <Link
                className="text-[#101618] dark:text-gray-300 dark:hover:text-white text-sm font-medium leading-normal hover:text-primary transition-colors py-2"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Buy
              </Link>
              <Link
                className="text-[#101618] dark:text-gray-300 dark:hover:text-white text-sm font-medium leading-normal hover:text-primary transition-colors py-2"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rent
              </Link>
              <Link
                className="text-[#101618] dark:text-gray-300 dark:hover:text-white text-sm font-medium leading-normal hover:text-primary transition-colors py-2"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Professional Services
              </Link>
              <Link
                className="text-[#101618] dark:text-gray-300 dark:hover:text-white text-sm font-medium leading-normal hover:text-primary transition-colors py-2"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stories
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-[#f0f4f5] dark:border-gray-800">
                <Link href="/login" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                  <span className="truncate">Log In</span>
                </Link>
                <Link href="/signup" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f4f5] dark:bg-gray-800 text-[#101618] dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <span className="truncate">Sign Up</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <p className="text-[#101618] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
              Find Your Next Home
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-grow">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#6c757d] dark:text-gray-400">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101618] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-0 bg-[#f8f9fa] dark:bg-gray-800 h-12 placeholder:text-[#6c757d] dark:placeholder:text-gray-500 pl-12 pr-4 text-base font-normal leading-normal"
                  placeholder="Enter an address, city, or ZIP code"
                  defaultValue=""
                />
              </div>
              <button className="flex w-full sm:w-auto min-w-[100px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">Search</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Panel (Left Column) */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-[#F8F9FA] dark:bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#101618] dark:text-white">Filters</h3>
                  <div className="flex flex-col">
                    <details className="flex flex-col border-t border-t-[#dae3e7] dark:border-t-gray-700 py-2 group" open>
                      <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                        <p className="text-[#101618] dark:text-gray-200 text-sm font-medium leading-normal">Price Range</p>
                        <span className="material-symbols-outlined text-[#101618] dark:text-gray-300 group-open:rotate-180 transition-transform">
                          expand_more
                        </span>
                      </summary>
                      <div className="py-2">
                        <div className="flex h-[38px] w-full pt-1.5">
                          <div className="flex h-1.5 w-full items-center rounded-full bg-[#dae3e7] dark:bg-gray-700">
                            <div className="relative h-full bg-primary" style={{ width: "70%", marginLeft: "10%" }}>
                              <div className="absolute -left-2 -top-2 flex cursor-pointer flex-col items-center gap-1">
                                <div className="size-5 rounded-full bg-primary border-2 border-white dark:border-gray-800 shadow"></div>
                                <p className="text-[#6c757d] dark:text-gray-400 text-xs font-normal leading-normal whitespace-nowrap">
                                  $100,000
                                </p>
                              </div>
                              <div className="absolute -right-2 -top-2 flex cursor-pointer flex-col items-center gap-1">
                                <div className="size-5 rounded-full bg-primary border-2 border-white dark:border-gray-800 shadow"></div>
                                <p className="text-[#6c757d] dark:text-gray-400 text-xs font-normal leading-normal whitespace-nowrap">
                                  $800,000
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className="flex flex-col border-t border-t-[#dae3e7] dark:border-t-gray-700 py-2 group">
                      <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                        <p className="text-[#101618] dark:text-gray-200 text-sm font-medium leading-normal">Beds &amp; Baths</p>
                        <span className="material-symbols-outlined text-[#101618] dark:text-gray-300 group-open:rotate-180 transition-transform">
                          expand_more
                        </span>
                      </summary>
                      <div className="space-y-4 pt-3 pb-2">
                        <div>
                          <p className="text-xs font-medium text-[#6c757d] dark:text-gray-400 mb-2">Bedrooms</p>
                          <div className="flex items-center gap-2">
                            {["Any", "1", "2", "3", "4+"].map((bed) => (
                              <button
                                key={bed}
                                onClick={() => setSelectedBedrooms(bed)}
                                className={`flex-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                                  selectedBedrooms === bed
                                    ? "bg-primary text-white"
                                    : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                                }`}
                              >
                                {bed}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-[#6c757d] dark:text-gray-400 mb-2">Bathrooms</p>
                          <div className="flex items-center gap-2">
                            {["Any", "1+", "2+", "3+"].map((bath) => (
                              <button
                                key={bath}
                                onClick={() => setSelectedBathrooms(bath)}
                                className={`flex-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                                  selectedBathrooms === bath
                                    ? "bg-primary text-white"
                                    : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                                }`}
                              >
                                {bath}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className="flex flex-col border-t border-t-[#dae3e7] dark:border-t-gray-700 py-2 group">
                      <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                        <p className="text-[#101618] dark:text-gray-200 text-sm font-medium leading-normal">Property Type</p>
                        <span className="material-symbols-outlined text-[#101618] dark:text-gray-300 group-open:rotate-180 transition-transform">
                          expand_more
                        </span>
                      </summary>
                      <div className="space-y-2 pt-3 pb-2">
                        {["House", "Condo", "Townhouse", "Multi-Family"].map((type) => (
                          <label key={type} className="flex items-center gap-3 cursor-pointer">
                            <input
                              className="form-checkbox rounded text-primary focus:ring-primary/50"
                              type="checkbox"
                              defaultChecked={type === "House"}
                            />
                            <span className="text-sm text-[#101618] dark:text-gray-300">{type}</span>
                          </label>
                        ))}
                      </div>
                    </details>
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                      <span className="truncate">Apply Filters</span>
                    </button>
                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-transparent text-[#6c757d] dark:text-gray-400 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <span className="truncate">Reset</span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
            {/* Results Area (Right Column) */}
            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
                <p className="text-sm text-[#6c757d] dark:text-gray-400">
                  Showing <span className="font-bold text-[#101618] dark:text-white">24</span> of{" "}
                  <span className="font-bold text-[#101618] dark:text-white">128</span> results
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#6c757d] dark:text-gray-400">Sort by:</span>
                    <select className="form-select text-sm font-medium text-[#101618] dark:text-white bg-transparent dark:bg-gray-800 border-0 focus:ring-2 focus:ring-primary rounded-lg p-2">
                      <option>Newest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-1 p-1 bg-[#f0f4f5] dark:bg-gray-800 rounded-lg">
                    <button className="p-2 rounded-md bg-white dark:bg-gray-700 text-primary shadow">
                      <span className="material-symbols-outlined">grid_view</span>
                    </button>
                    <button className="p-2 rounded-md text-[#6c757d] dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-700/50">
                      <span className="material-symbols-outlined">list</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <div
                    key={property.id}
                    className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={property.image}
                        alt={property.alt}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <button
                        onClick={() => toggleFavorite(property.id)}
                        className={`absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm transition-colors ${
                          favoriteProperties.has(property.id)
                            ? "text-red-500 dark:text-red-400"
                            : "text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                        }`}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={
                            favoriteProperties.has(property.id)
                              ? { fontVariationSettings: "'FILL' 1" }
                              : undefined
                          }
                        >
                          {favoriteProperties.has(property.id) ? "favorite" : "favorite_border"}
                        </span>
                      </button>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <p className="text-2xl font-bold text-black dark:text-white">{property.price}</p>
                      <p className="text-sm text-[#6c757d] dark:text-gray-400 mt-1 flex-grow">{property.address}</p>
                      <div className="flex items-center gap-4 text-sm text-[#101618] dark:text-gray-300 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base">bed</span> {property.beds}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base">bathtub</span> {property.baths}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base">square_foot</span> {property.sqft}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav aria-label="Pagination" className="flex items-center gap-2">
                  <a
                    className="flex items-center justify-center size-9 rounded-lg text-[#6c757d] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">chevron_left</span>
                  </a>
                  <a className="flex items-center justify-center size-9 rounded-lg text-white bg-primary font-bold" href="#">
                    1
                  </a>
                  <a
                    className="flex items-center justify-center size-9 rounded-lg text-[#101618] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    href="#"
                  >
                    2
                  </a>
                  <a
                    className="flex items-center justify-center size-9 rounded-lg text-[#101618] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    href="#"
                  >
                    3
                  </a>
                  <span className="flex items-center justify-center size-9 text-[#6c757d]">...</span>
                  <a
                    className="flex items-center justify-center size-9 rounded-lg text-[#101618] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    href="#"
                  >
                    8
                  </a>
                  <a
                    className="flex items-center justify-center size-9 rounded-lg text-[#6c757d] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">chevron_right</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

