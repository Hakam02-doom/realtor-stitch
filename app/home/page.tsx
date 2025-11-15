"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4 text-black dark:text-white">
              <div className="h-8 w-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                Realtor Platform
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-9">
              <a
                className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary"
                href="#"
              >
                Realtor Services
              </a>
              <a
                className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary"
                href="#"
              >
                Professional Services
              </a>
              <a
                className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary"
                href="#"
              >
                Stories
              </a>
              <Link
                href="/find"
                className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary"
              >
                Filter
              </Link>
              <Link
                href="/professionals"
                className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary"
              >
                Browse Professionals
              </Link>
              <Link
                href="/terms"
                className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary"
              >
                Terms of Service
              </Link>
            </div>
            <div className="hidden md:flex gap-2">
              <Link href="/signup" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-black text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">Sign Up</span>
              </Link>
              <Link href="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                <span className="truncate">Log In</span>
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
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
            <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4">
              <nav className="flex flex-col space-y-4">
                <a
                  className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary px-2 py-2"
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Realtor Services
                </a>
                <a
                  className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary px-2 py-2"
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Professional Services
                </a>
                <a
                  className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary px-2 py-2"
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Stories
                </a>
                <Link
                  href="/find"
                  className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Filter
                </Link>
                <Link
                  href="/professionals"
                  className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Browse Professionals
                </Link>
                <Link
                  href="/terms"
                  className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Terms of Service
                </Link>
                <div className="flex flex-col gap-2 pt-2 border-t border-gray-200 dark:border-gray-800">
                  <Link href="/signup" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-black text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                    <span className="truncate">Sign Up</span>
                  </Link>
                  <Link href="/login" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                    <span className="truncate">Log In</span>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow">
        {/* HeroSection */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-4 sm:gap-6 text-center md:text-left">
                <h1 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tighter">
                  Your Real Estate Journey, Reimagined.
                </h1>
                <h2 className="text-black dark:text-white text-base md:text-lg font-normal leading-normal">
                  Discover expert realtors, connect with professional services, and share your unique home story, all in one place.
                </h2>
                <div className="mt-4">
                  <button className="w-full md:w-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Get Started</span>
                  </button>
                </div>
              </div>
              <div className="w-full h-64 md:h-auto md:aspect-square bg-center bg-no-repeat bg-cover rounded-xl relative overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdrJdVCd6m-2U38Mk62vpS2rICoBVe-24Yy4LMP8cig7OnRt49xt9Awp-annNwfhF4JFfIexqpWAJPT9o5aOkZtpn4PQ2nQDoDmpOIF094OGkvufFUits8FI8-YBwz2tt3RRcs1UakGMs4vWkYVH8pyqHTsa8PISLtev09K96yNt6HMaFVxS8h_N6PCWti9f6GFb5rdXpsL5iADvNvmIW1t6YsDrojLSNdhYCHXW46v6zb9AGi39zUk49Lqk5oA4NHPlhNwfFA_tHp"
                  alt="A modern, bright living room with large windows and minimalist furniture."
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* FeatureSection */}
        <section className="py-20 md:py-24 bg-white dark:bg-background-dark/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-black dark:text-white tracking-tight text-3xl md:text-4xl font-black leading-tight">
                  Everything You Need for a Successful Move
                </h1>
                <p className="mt-4 text-black dark:text-white/80 text-base font-normal leading-normal">
                  Our platform simplifies your real estate experience by connecting you with the best professionals and a supportive community.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 flex-col text-center items-center">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    real_estate_agent
                  </span>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-black dark:text-white text-lg font-bold leading-tight">
                      Find Expert Realtors
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
                      Access a curated network of top-rated real estate agents in your area.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 flex-col text-center items-center">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    construction
                  </span>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-black dark:text-white text-lg font-bold leading-tight">
                      Hire Top Professionals
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
                      From movers to interior designers, find all the services you need.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 flex-col text-center items-center">
                  <span className="material-symbols-outlined text-primary text-4xl">forum</span>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-black dark:text-white text-lg font-bold leading-tight">
                      Share Your Story
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
                      Connect with a community by sharing the unique journey of your home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Storytelling Section */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[400px] md:min-h-[500px] relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdIiysyywNXvTn_l_PyN--FeUsjRP3lGI9Zn57KsNsEiSn4Gdrv1dIUFnlj5pnTkpPJZ7ApB9UoLX9t0qVhH-W36uegS9nVnq0TNi4FAKayy0KITjlNcW7VdvrItkwyfiVTkAvsicrT_2VD-tDb4aZPsG_S0oIxc1KoiFEfScSNaLfuowYQB68LdLPRclMkVxyrKIVDpImgm6MNpCAOWMuxLEuSd5PEA1jcRLy_WIgoo6irRuzgFWyShG2YJIGCIhvkdxXlDwLoPEx"
                alt="A cozy, well-lit kitchen with a family preparing a meal together."
                fill
                className="object-cover -z-10"
                unoptimized
              />
              <div className="p-8 md:p-12 text-white max-w-2xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Share Your Home&apos;s Story
                </h2>
                <p className="mt-4 text-base md:text-lg font-normal leading-normal">
                  Join a community of homeowners and enthusiasts. Share the memories, renovations, and unique history of your home and connect with others who appreciate the story behind the space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-24 bg-white dark:bg-background-dark/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-black dark:text-white text-3xl font-bold tracking-tight">
                Loved by Homeowners Everywhere
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Don&apos;t just take our word for it. Here&apos;s what our users are saying.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col">
                <span className="material-symbols-outlined text-primary text-3xl">
                  format_quote
                </span>
                <p className="text-black dark:text-white/90 mt-4 flex-grow">
                  &quot;Finding a reliable realtor was so easy with this platform. The process was seamless from start to finish. Highly recommended!&quot;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    className="h-12 w-12 rounded-full object-cover"
                    alt="Portrait of Sarah L."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuArCwvrjdleHEO0Mp8Ld5gUgFyy0zm8aHL6TRGoPi0evHsekVjLL6XId-1S8iPSgUpSluCSuWmgIlv_mc1MiTPxxcmFmBVJuiJvXj2CI3fEd0RKfy2C1FacOIxLQuCKvVOjUQ81ZltRJTSWgq_-g6CejZYX4tRt5OEN4SEn-aO0cveoy2STRtnlvZds13Lce1sAECTSnk8XvdrJY_HmLVFrm5oMRR-D3soTjMFbpCS_-2DSO_s0vsBOzvrzoGZ9huEN3rB8JefBf_Rn"
                    width={48}
                    height={48}
                    unoptimized
                  />
                  <div>
                    <p className="font-bold text-black dark:text-white">Sarah L.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">New Homeowner</p>
                  </div>
                </div>
              </div>
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col">
                <span className="material-symbols-outlined text-primary text-3xl">
                  format_quote
                </span>
                <p className="text-black dark:text-white/90 mt-4 flex-grow">
                  &quot;The professional services directory is a game-changer. We found an amazing interior designer and movers in just a few clicks.&quot;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    className="h-12 w-12 rounded-full object-cover"
                    alt="Portrait of Michael B."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT8ySA4fE2S6yXjGccWv9TfPVipID0283H-fVGmkhWYNIZMlv8ArxZ1OjsWnZ7YPnvXKOFXzxSRWBBM6dLm6XDRZBbduQYSPMUyueFu_aX-aJavRuOnVIPUe7Cyy4pTPrlIDrUOJ64B6V8qWR5a7D94JkB3vXftlFTRb2cwbSFOnErplCQMYblgopTK4aqAhcVNUtwNqQSotaDxOatOiORmqr6LAqzEmHuvTMVC9zfq0CaYARGmyzNvqafQz3smXeHy5plTQrO9WI5"
                    width={48}
                    height={48}
                    unoptimized
                  />
                  <div>
                    <p className="font-bold text-black dark:text-white">Michael B.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Repeat User</p>
                  </div>
                </div>
              </div>
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col">
                <span className="material-symbols-outlined text-primary text-3xl">
                  format_quote
                </span>
                <p className="text-black dark:text-white/90 mt-4 flex-grow">
                  &quot;I love the story sharing feature. It&apos;s so inspiring to see other people&apos;s home journeys and share our own renovation progress.&quot;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    className="h-12 w-12 rounded-full object-cover"
                    alt="Portrait of Jessica T."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP-0rBG36iy-O5XVDvTAWu7TG5vb2CGLmY55fYfPE1_OZoF_WGOFnJY_ZFs6SqdPH95KM_E4wpznbKG5PI2iGCUmar_UzOkFv5dFpl37Fn57okvC8g5S_8TKflKi1waq3PglW-Dj1kDQIdXi1rWBF8SJr5ox1H2ik0cJKggn-5Oytdr_EkywqUA0liDzVMVfQdNrNClhMzI4v3R1iMAty1CSygsdvC6j7CG3vzNgj0GuwH1C0J6ALCVYUTUMdYuz98YIgJ9r5caP42"
                    width={48}
                    height={48}
                    unoptimized
                  />
                  <div>
                    <p className="font-bold text-black dark:text-white">Jessica T.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Community Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/20 dark:bg-primary/10 rounded-xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white">
                Ready to find your perfect professional?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-black dark:text-white/80">
                Join thousands of others on their journey to creating the perfect home. Sign up today and get started for free.
              </p>
              <div className="mt-8">
                <Link href="/signup" className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                  <span className="truncate">Sign Up Now</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark/50 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 text-black dark:text-white">
                <div className="h-6 w-6 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path
                      clipRule="evenodd"
                      d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-base font-bold">Realtor Platform</h2>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                © 2024 Realtor Platform, Inc. All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="/terms">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                Connect
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

