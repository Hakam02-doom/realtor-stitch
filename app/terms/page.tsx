"use client";

import Link from "next/link";
import { useState } from "react";

export default function TermsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-16">
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
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Realtor Platform</h2>
              </Link>
              <div className="flex flex-1 justify-end items-center gap-8">
                <nav className="hidden md:flex items-center gap-9">
                  <Link className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300 hover:text-primary" href="/home">
                    Home
                  </Link>
                  <Link className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300 hover:text-primary" href="#">
                    Services
                  </Link>
                  <Link className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300 hover:text-primary" href="#">
                    Stories
                  </Link>
                  <Link className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300 hover:text-primary" href="#">
                    Contact
                  </Link>
                  <Link className="text-sm font-bold leading-normal text-primary" href="/terms">
                    Terms of Service
                  </Link>
                </nav>
                <div className="hidden sm:flex gap-2">
                  <Link href="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                    <span className="truncate">Log In</span>
                  </Link>
                  <Link href="/signup" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    <span className="truncate">Sign Up</span>
                  </Link>
                </div>
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <span className="material-symbols-outlined text-2xl">close</span>
                  ) : (
                    <span className="material-symbols-outlined text-2xl">menu</span>
                  )}
                </button>
              </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4 px-4 sm:px-6">
                <nav className="flex flex-col space-y-4">
                  <Link
                    className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300 hover:text-primary py-2"
                    href="/home"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300 hover:text-primary py-2"
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300 hover:text-primary py-2"
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Stories
                  </Link>
                  <Link
                    className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300 hover:text-primary py-2"
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    className="text-sm font-bold leading-normal text-primary py-2"
                    href="/terms"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Terms of Service
                  </Link>
                  <div className="flex flex-col gap-2 pt-2 border-t border-gray-200 dark:border-gray-800">
                    <Link href="/login" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                      <span className="truncate">Log In</span>
                    </Link>
                    <Link href="/signup" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                      <span className="truncate">Sign Up</span>
                    </Link>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </header>
        <main className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
          <div className="layout-content-container flex flex-col w-full max-w-4xl">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex w-full flex-col gap-3">
                <p className="text-[#101618] dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Terms of Service
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                  Last Updated: October 26, 2023
                </p>
              </div>
            </div>
            <div className="p-4 space-y-8">
              <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h2 className="text-[#101618] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
                  Table of Contents
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a className="text-primary text-sm font-medium leading-normal underline" href="#introduction">
                      1. Introduction/Agreement
                    </a>
                  </li>
                  <li>
                    <a className="text-primary text-sm font-medium leading-normal underline" href="#accounts">
                      2. User Accounts &amp; Responsibilities
                    </a>
                  </li>
                  <li>
                    <a className="text-primary text-sm font-medium leading-normal underline" href="#services">
                      3. Services Provided
                    </a>
                  </li>
                  <li>
                    <a className="text-primary text-sm font-medium leading-normal underline" href="#content">
                      4. User-Generated Content
                    </a>
                  </li>
                  <li>
                    <a className="text-primary text-sm font-medium leading-normal underline" href="#ip">
                      5. Intellectual Property
                    </a>
                  </li>
                  <li>
                    <a className="text-primary text-sm font-medium leading-normal underline" href="#termination">
                      6. Termination Clause
                    </a>
                  </li>
                  <li>
                    <a className="text-primary text-sm font-medium leading-normal underline" href="#disclaimers">
                      7. Disclaimers &amp; Limitation of Liability
                    </a>
                  </li>
                  <li>
                    <a className="text-primary text-sm font-medium leading-normal underline" href="#contact">
                      8. Contact Information
                    </a>
                  </li>
                </ul>
              </div>
              <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200 space-y-6">
                <section id="introduction">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">1. Introduction/Agreement</h3>
                  <p>
                    Welcome to Realtor Platform. By accessing or using our website and services, you agree to be bound by these Terms of Service and our{" "}
                    <a className="text-primary underline" href="#">
                      Privacy Policy
                    </a>
                    . If you do not agree to these terms, please do not use our services. This agreement applies to all visitors, users, and others who access the Service.
                  </p>
                </section>
                <section id="accounts">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">2. User Accounts &amp; Responsibilities</h3>
                  <p>
                    To access certain features, you must create an account. You are responsible for safeguarding your account information and for all activities that occur under your account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                  </p>
                </section>
                <section id="services">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">3. Services Provided</h3>
                  <p>
                    Realtor Platform provides a suite of services including, but not limited to, connecting clients with real estate professionals, offering professional services, and a platform for users to share their stories and experiences related to real estate. We act as a neutral venue and are not a party to any transaction between users.
                  </p>
                </section>
                <section id="content">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">4. User-Generated Content</h3>
                  <p>
                    Users may post content, such as stories, reviews, and comments. By posting content, you grant Realtor Platform a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content in connection with the service. You are solely responsible for the content you post and agree not to post anything that is illegal, defamatory, or infringes on the rights of others.
                  </p>
                </section>
                <section id="ip">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">5. Intellectual Property</h3>
                  <p>
                    All content and materials on Realtor Platform, including the logo, design, text, and graphics, are the exclusive property of Realtor Platform and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                  </p>
                </section>
                <section id="termination">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">6. Termination Clause</h3>
                  <p>
                    We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. You may terminate your account at any time by contacting our support team.
                  </p>
                </section>
                <section id="disclaimers">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">7. Disclaimers &amp; Limitation of Liability</h3>
                  <p>
                    The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. Realtor Platform does not warrant that the service will be uninterrupted, secure, or error-free. In no event shall Realtor Platform, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service.
                  </p>
                </section>
                <section id="contact">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">8. Contact Information</h3>
                  <p>
                    If you have any questions about these Terms, please contact us at{" "}
                    <a className="text-primary underline" href="mailto:support@realtorplatform.com">
                      support@realtorplatform.com
                    </a>
                    .
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a className="text-gray-500 dark:text-gray-400 hover:text-primary" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-400 hover:text-primary" href="#">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-400 hover:text-primary" href="#">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <a className="text-gray-500 dark:text-gray-400 hover:text-primary" href="#">
                      Find an Agent
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-400 hover:text-primary" href="#">
                      List a Property
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-400 hover:text-primary" href="#">
                      Read Stories
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link className="text-primary font-medium" href="/terms">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-400 hover:text-primary" href="#">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Connect</h4>
                <div className="flex space-x-4">
                  <a className="text-gray-500 dark:text-gray-400 hover:text-primary" href="#">
                    <span className="sr-only">Facebook</span>
                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        clipRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a className="text-gray-500 dark:text-gray-400 hover:text-primary" href="#">
                    <span className="sr-only">Twitter</span>
                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500 dark:text-gray-400 hover:text-primary" href="#">
                    <span className="sr-only">Instagram</span>
                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        clipRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.161 1.043c-1.062.05-1.718.216-2.226.419a3.874 3.874 0 00-1.385.932A3.874 3.874 0 006.59 5.766c-.203.508-.369 1.164-.419 2.226-.05 1.024-.06 1.352-.06 3.593s.01 2.569.06 3.593c.05 1.062.216 1.718.419 2.226a3.874 3.874 0 00.932 1.385 3.874 3.874 0 001.385.932c.508.203 1.164.369 2.226.419 1.024.05 1.352.06 3.593.06s2.569-.01 3.593-.06c1.062-.05 1.718-.216 2.226-.419a3.874 3.874 0 001.385-.932 3.874 3.874 0 00.932-1.385c.203-.508.369-1.164.419-2.226.05-1.024.06-1.352.06-3.593s-.01-2.569-.06-3.593c-.05-1.062-.216-1.718-.419-2.226a3.874 3.874 0 00-.932-1.385 3.874 3.874 0 00-1.385-.932c-.508-.203-1.164-.369-2.226-.419-1.024-.05-1.352-.06-3.593-.06s-2.569.01-3.593.06zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM12 14a2 2 0 110-4 2 2 0 010 4zm4-7.5a1 1 0 100-2 1 1 0 000 2z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>© 2023 Realtor Platform, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

