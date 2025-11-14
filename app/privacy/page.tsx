"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    // Update active section based on hash in URL
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActiveSection(hash);
    }
  }, []);

  const sections = [
    { id: "introduction", icon: "info", label: "Introduction" },
    { id: "information-we-collect", icon: "database", label: "Information We Collect" },
    { id: "how-we-use-information", icon: "manage_search", label: "How We Use Information" },
    { id: "how-we-share-information", icon: "share", label: "How We Share Information" },
    { id: "data-security", icon: "security", label: "Data Security" },
    { id: "your-rights", icon: "account_circle", label: "Your Rights and Choices" },
    { id: "childrens-privacy", icon: "child_care", label: "Children's Privacy" },
    { id: "changes-to-policy", icon: "notifications_active", label: "Changes to This Policy" },
    { id: "contact-us", icon: "mail", label: "Contact Us" },
  ];

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark text-[#101618] dark:text-white">
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 flex items-center justify-center border-b border-gray-200/50 dark:border-gray-700/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <nav className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Link href="/home" className="flex items-center gap-4">
            <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                fillRule="evenodd"
              ></path>
            </svg>
            <h2 className="text-lg font-bold text-[#101618] dark:text-white">Realtor Platform</h2>
          </Link>
          <div className="hidden md:flex items-center gap-9">
            <Link className="text-sm font-medium hover:text-primary transition-colors text-[#101618] dark:text-white" href="/home">
              Home
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors text-[#101618] dark:text-white" href="#">
              Services
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors text-[#101618] dark:text-white" href="#">
              Stories
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Link href="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary/20 dark:bg-primary/30 text-primary text-sm font-bold hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
              <span>Log In</span>
            </Link>
            <Link href="/signup" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
              <span>Sign Up</span>
            </Link>
          </div>
        </nav>
      </header>
      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* SideNavBar (Floating Table of Contents) */}
          <aside className="w-full md:w-64 lg:w-72 md:sticky top-24 self-start">
            <div className="flex flex-col gap-4 p-4 rounded-lg bg-white dark:bg-background-dark/50 border border-gray-200/80 dark:border-gray-700/50">
              <div className="flex flex-col pb-2 border-b border-gray-200/80 dark:border-gray-700/50">
                <h3 className="text-base font-bold text-[#101618] dark:text-white">Privacy Policy</h3>
                <p className="text-sm text-[#5e818d] dark:text-gray-400">Table of Contents</p>
              </div>
              <div className="flex flex-col gap-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? "bg-primary/20 dark:bg-primary/30 text-primary"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800/50 text-[#101618] dark:text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{section.icon}</span>
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>
          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <div className="space-y-10">
              {/* Page Heading */}
              <div className="border-b border-gray-200/80 dark:border-gray-700/50 pb-6">
                <p className="text-4xl font-black tracking-tighter text-[#101618] dark:text-white">Privacy Policy</p>
                <p className="text-[#5e818d] dark:text-gray-400 text-sm pt-2">Last Updated: October 26, 2023</p>
              </div>
              <article className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-[#101618] dark:text-white/90">
                {/* Section 1 */}
                <section id="introduction">
                  <h2 className="text-2xl font-bold text-[#101618] dark:text-white">1. Introduction</h2>
                  <p>
                    Welcome to Realtor Platform. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site. We reserve the right to make changes to this Privacy Policy at any time and for any reason.
                  </p>
                </section>
                {/* Section 2 */}
                <section id="information-we-collect">
                  <h2 className="text-2xl font-bold text-[#101618] dark:text-white">2. Information We Collect</h2>
                  <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                  <h3 className="text-xl font-semibold text-[#101618] dark:text-white">Personal Data</h3>
                  <p>
                    Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
                  </p>
                  <h3 className="text-xl font-semibold text-[#101618] dark:text-white">Usage Data &amp; Cookies</h3>
                  <p>
                    Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience.
                  </p>
                </section>
                {/* Section 3 */}
                <section id="how-we-use-information">
                  <h2 className="text-2xl font-bold text-[#101618] dark:text-white">3. How We Use Your Information</h2>
                  <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-[#101618] dark:text-white/90">
                    <li>Create and manage your account.</li>
                    <li>Email you regarding your account or order.</li>
                    <li>Enable user-to-user communications.</li>
                    <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                    <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                    <li>Increase the efficiency and operation of the Site.</li>
                  </ul>
                </section>
                {/* Section 4 */}
                <section id="how-we-share-information">
                  <h2 className="text-2xl font-bold text-[#101618] dark:text-white">4. How We Share Your Information</h2>
                  <p>
                    We may share information we have collected about you in certain situations. Your information may be disclosed as follows: By Law or to Protect Rights, Third-Party Service Providers, and with Real Estate Partners to facilitate services. We do not sell your personal information to third parties.
                  </p>
                </section>
                {/* Section 5 */}
                <section id="data-security">
                  <h2 className="text-2xl font-bold text-[#101618] dark:text-white">5. Data Security</h2>
                  <p>
                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                  </p>
                </section>
                {/* Section 6 */}
                <section id="your-rights">
                  <h2 className="text-2xl font-bold text-[#101618] dark:text-white">6. Your Rights and Choices</h2>
                  <p>
                    You may at any time review or change the information in your account or terminate your account by logging into your account settings and updating your account. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.
                  </p>
                </section>
                {/* Section 7 */}
                <section id="childrens-privacy">
                  <h2 className="text-2xl font-bold text-[#101618] dark:text-white">7. Children&apos;s Privacy</h2>
                  <p>We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.</p>
                </section>
                {/* Section 8 */}
                <section id="changes-to-policy">
                  <h2 className="text-2xl font-bold text-[#101618] dark:text-white">8. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                  </p>
                </section>
                {/* Section 9 */}
                <section id="contact-us">
                  <h2 className="text-2xl font-bold text-[#101618] dark:text-white">9. Contact Us</h2>
                  <p>
                    If you have questions or comments about this Privacy Policy, please contact us at:{" "}
                    <a className="text-primary hover:underline" href="mailto:privacy@realtorplatform.com">
                      privacy@realtorplatform.com
                    </a>
                    .
                  </p>
                </section>
              </article>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-white dark:bg-background-dark/50 border-t border-gray-200/80 dark:border-gray-700/50 mt-16">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#5e818d] dark:text-gray-400">© 2024 Realtor Platform. All rights reserved.</p>
            <div className="flex gap-6">
              <Link className="text-sm font-medium hover:text-primary transition-colors text-[#101618] dark:text-white" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-sm font-medium text-primary" href="/privacy">
                Privacy Policy
              </Link>
              <a className="text-sm font-medium hover:text-primary transition-colors text-[#101618] dark:text-white" href="#">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

