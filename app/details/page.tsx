"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DetailsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      {/* TopNavBar Component */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 px-4 sm:px-10 lg:px-20 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-gray-900 dark:text-white">
            <div className="size-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              Realtor Services
            </h2>
          </div>
          <nav className="hidden lg:flex items-center gap-9">
            <a className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal" href="#">
              For Sale
            </a>
            <a className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal" href="#">
              For Rent
            </a>
            <a className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal" href="#">
              Agents
            </a>
            <a className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal" href="#">
              Services
            </a>
            <a className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal" href="#">
              Stories
            </a>
          </nav>
        </div>
        <div className="flex flex-1 justify-end items-center gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">List a Property</span>
          </button>
          <Link href="/profile" className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ml-2 relative overflow-hidden cursor-pointer">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADVLD20bDM9KD1p6R6_THTKFYbCh7PThJbpgSAcUbyprMCcigUYRlUW_YM6tioBmyfZRWsEaLdCMnFYjcJKpRmKNCyo4WwhbjYyvIydIwTvIRCC9b5d47ZaRU6HTaCzJpJgA4GQ5xm877uTC5rFKo9rHjt-ESpHhMpjDasG7zYgQRhPvYkAAhvgHFGdoJEVyhNq4RC5_BZbUtrXBz4NULsPCs3kK8ULbkRiwGXmU-uMnnViaY71jnsPBOFOjZWbeZI2wa-EgNQSm0A"
              alt="User profile picture"
              fill
              className="object-cover"
              unoptimized
            />
          </Link>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-900 dark:text-white hover:text-primary transition-colors"
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
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 py-4 px-4 sm:px-10">
            <nav className="flex flex-col space-y-4">
              <a
                className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary py-2"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Sale
              </a>
              <a
                className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary py-2"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Rent
              </a>
              <a
                className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary py-2"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agents
              </a>
              <a
                className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary py-2"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary py-2"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stories
              </a>
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-200 dark:border-gray-800">
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">List a Property</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <main className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 lg:px-20 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full">
            {/* Breadcrumbs Component */}
            <div className="flex flex-wrap gap-2 px-4 py-2 text-sm">
              <a className="text-gray-500 dark:text-gray-400 font-medium leading-normal" href="#">
                Home
              </a>
              <span className="text-gray-500 dark:text-gray-400 font-medium leading-normal">/</span>
              <a className="text-gray-500 dark:text-gray-400 font-medium leading-normal" href="#">
                For Sale
              </a>
              <span className="text-gray-500 dark:text-gray-400 font-medium leading-normal">/</span>
              <a className="text-gray-500 dark:text-gray-400 font-medium leading-normal" href="#">
                New York
              </a>
              <span className="text-gray-500 dark:text-gray-400 font-medium leading-normal">/</span>
              <span className="text-gray-900 dark:text-white font-medium leading-normal">123 Main Street</span>
            </div>
            {/* PageHeading Component */}
            <div className="flex flex-wrap justify-between items-start gap-4 p-4">
              <div className="flex flex-col gap-2">
                <p className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                  123 Main Street, Brooklyn, NY 11201
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal">
                  A stunning modern apartment with panoramic city views.
                </p>
              </div>
              <span className="flex items-center justify-center rounded-md h-8 px-3 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                For Sale
              </span>
            </div>
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
              {/* Left Column: Image Gallery & Details */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* HeaderImage Component / Gallery */}
                <div className="grid grid-cols-1 gap-2">
                  <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-96 relative">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQKFrUIbafjxGBTSLT57YpbHvf56JYRsHPZdqyMyGQAL38hmcgK5lbSJobzPz6eub8fhfT3Z2ivOVD-5KHJK8BvORxn3rTUpU3Sm0xskxTucRJanLh3xvuareG0tLidUW2aNb_D7YfJao14Xq2x9eF7HDY2dVAzWH_CGsf2_JDBWBTbCsvhII7CP9NEdhVnbglfqML7cNIwXIKzN7Q7gTXYj_vE270g7gU_sAWCRXMB5oJqd5pYjND4xIwIy2QgznswaHm__R3DkQ3"
                      alt="Exterior view of a modern apartment building at dusk"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="bg-cover bg-center h-32 rounded-lg relative overflow-hidden">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJlGP8hS9wU6lif6T6QihhLdMYU-rwxrx6oJb1NMtfJokOIZ8y-8AgRvK6U-i4piYqAqvXxla_I57emfJw5immZDL7JainBGbRG41HaryyXQDiyWb-_iHMAwz9M07UDqFwg_CfZSksfFM3boAHBJqO760nRGxEISWCeH_ebE6cJG91R7N20pukndI9EQ2qpS3odUaF_29kEyUWNrHztsl99mTtG0_YU8uAOkmzn4IargtG7Ns8iiZ-RAeOsquh_PWo6axaSheRFzwh"
                        alt="Bright and airy living room with large windows"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="bg-cover bg-center h-32 rounded-lg relative overflow-hidden">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_rtI1-cxFYowzphptRAophbmoqZbUDM--Mf3b8GXpXMbgW8CDZTKIH9ia6sL31ChW0LxiwcVxHD7VnnvSLLBvYjOKgB32sLUY9EYyxScL66p8WeyJnpXlf_MPFG38hN59uKiK7giHvWuvdflVfe4Jer6VvPe7Uv99FWqTvNIkQmQZETCrQOGVAQjsr2HEJ-pKxSm1vs-D7YGRFkJ7rx9HabnUxi5PhNrYPl7EwNiRIgGFDGMyt6cvAv09RkL1V10F6nPLDNxMPyU1"
                        alt="Modern kitchen with stainless steel appliances"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="bg-cover bg-center h-32 rounded-lg relative overflow-hidden">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc1950oXmDwL8V2gbQ5lVSwccAExqJNZtNhkajW58ZY2Lt-TQLoqCOKwTsJJoqv9Ymz26kjEnhJ3baR085GEFyayLDJswrUC5yktJYNENo5ZrDimmQ6LrH3cBmDlSTRNxs-yAqhk9Rf5abjaWnglD_zhiqHCqOsiWw4ILDuS-yI9EZRBkRMin9Q8xdWTxnxR0NwDOvYOskwMrfzIULbrjElaaOybcWkkCBqsnWvm9D9N_wx8__LdBeeQZ1tV7X3L2QRkPPGGX52s95"
                        alt="Spacious bedroom with a city view"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="relative bg-cover bg-center h-32 rounded-lg overflow-hidden">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxw9H6r6rTqte1Cn4iTR1t4ys9MgjXZfjP8iF7Dv2szBj666zxLW_76SoOxY7mw3L9H1_dRI38qKFSnzdKCtk4s0z_jbV0e7Q6icp2IZsKqNvEiapDfaUpawGOfmundupxXFEfekfXV9eYg6GuhH_2tGdINS8_9YUrNZV5MWUX7FTaEKCrHk2mDq4LOV4LJuIRAoKR36X9t2ptjdg-jhswKzH-ecvijjqfSaWA63xS3teBiMa4ywu8BELsh4D8lhKNVLI8b3dWjc61"
                        alt="Elegant bathroom with a marble countertop"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">+12</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Property Details Section */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    Property Overview
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex min-w-[120px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-gray-200 dark:border-gray-700 p-4 items-center bg-white dark:bg-background-dark/50">
                      <span className="material-symbols-outlined text-primary text-3xl">bed</span>
                      <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight">3 Beds</p>
                    </div>
                    <div className="flex min-w-[120px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-gray-200 dark:border-gray-700 p-4 items-center bg-white dark:bg-background-dark/50">
                      <span className="material-symbols-outlined text-primary text-3xl">bathtub</span>
                      <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight">2 Baths</p>
                    </div>
                    <div className="flex min-w-[120px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-gray-200 dark:border-gray-700 p-4 items-center bg-white dark:bg-background-dark/50">
                      <span className="material-symbols-outlined text-primary text-3xl">square_foot</span>
                      <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight">1,800 sqft</p>
                    </div>
                    <div className="flex min-w-[120px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-gray-200 dark:border-gray-700 p-4 items-center bg-white dark:bg-background-dark/50">
                      <span className="material-symbols-outlined text-primary text-3xl">calendar_month</span>
                      <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Built 2021</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Discover contemporary living in this beautifully designed 3-bedroom, 2-bathroom apartment in the heart of Brooklyn. Featuring an open-concept living space, floor-to-ceiling windows offer breathtaking views of the city skyline. The gourmet kitchen is equipped with state-of-the-art appliances and custom cabinetry, perfect for entertaining. The master suite includes a walk-in closet and a luxurious en-suite bathroom. Building amenities include a 24-hour doorman, fitness center, and a rooftop terrace.
                  </p>
                </div>
                {/* Features & Amenities Section */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    Features &amp; Amenities
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>Central Air
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>Hardwood Floors
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>In-unit Laundry
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>Dishwasher
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>Walk-in Closet
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>Pet Friendly
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>Fitness Center
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>Rooftop Deck
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>Doorman
                    </div>
                  </div>
                </div>
                {/* Location & Map Section */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    Location
                  </h3>
                  <div className="w-full h-80 rounded-xl bg-gray-300 dark:bg-gray-700 overflow-hidden relative">
                    <Image
                      alt="Map showing the location of the property in a city grid."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa1u1dG4cmnxZ_5MDi-Hkz7hFrkiLeEhoD-cm-6c4Z6RMkoaBHDFZX_rIi-xRkr1XVReOH5oYJ9g0qyXGnyurwpKu7h4zT8bQfkgiPWgwKQO2D3_JGaEd1HxFOPrbxL_E5JrnWFIlZU2HFGRy4U-zM0Njb8aNwwdaGnmFoo5ovtU-Pa7s3otrDcc_oOQS3QmuWV9wJruoMgClZ22RxMKGcLNhpIcuLJF_2kKVryHgkkdrMp6Dmj5f2HLiFjmpMH9O9tVNw44Hedi0h"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              {/* Right Column: Sticky Action Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-6">
                    <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400 text-lg">Price</p>
                      <p className="text-gray-900 dark:text-white text-4xl font-extrabold">$1,450,000</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">Est. Mortgage: $7,200/mo</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/calendar"
                        className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]"
                      >
                        <span className="truncate">Schedule a Viewing</span>
                      </Link>
                      <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary/20 text-primary text-base font-bold leading-normal tracking-[0.015em] dark:bg-primary/30 dark:text-primary-300">
                        <span className="truncate">Request Info</span>
                      </button>
                    </div>
                    <div className="flex justify-center gap-4">
                      <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 font-medium">
                        <span className="material-symbols-outlined text-xl">favorite_border</span> Save
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 font-medium">
                        <span className="material-symbols-outlined text-xl">share</span> Share
                      </button>
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-3">Listed by</p>
                      <div className="flex items-center gap-4">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-14 relative overflow-hidden">
                          <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5uJEDRSXbcVzXUCq9xK3Vl2N5Kp2syt5qb7ZxeSYqy6yDYAX_GlqEt5dGUcV2-F8PAUv22oLgYVmYdfDwAMzllFWPrvpJK9MX0RGWAnaAGq-4E_jZUmHAOajQrVxQopSB-FvYAo7q1GMEuJ98kO1ViwgT517XFHw-53AtG2yjpVQhAzgfoq2So6kEm14s2UF_1FemhUYN5LokbHDoOoCPazLvqUv6J4j_00ixlFpwXapy9oDtsba_UAzGHXkNR86XkdRny7SJE7pe"
                            alt="Profile picture of Jane Doe, real estate agent"
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <div>
                          <p className="text-gray-900 dark:text-white font-bold">Jane Doe</p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">Metropolis Real Estate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

