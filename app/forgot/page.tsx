"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Reset password requested for:", email);
    setIsSubmitted(true);
    // In a real app, you would send a request to your backend here
  };

  if (isSubmitted) {
    return (
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center group/design-root overflow-x-hidden p-4 bg-background-light dark:bg-background-dark font-display text-[#101618] dark:text-white">
        <div className="flex w-full max-w-md flex-col items-center gap-8">
          <header className="flex items-center justify-center whitespace-nowrap">
            <Link href="/home" className="flex items-center gap-4 text-[#101618] dark:text-white">
              <div className="size-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em]">Realtor Services</h2>
            </Link>
          </header>
          <main className="w-full rounded-xl bg-white dark:bg-background-dark/50 shadow-lg border border-gray-200 dark:border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-3xl font-black leading-tight tracking-[-0.033em]">Check Your Email</h1>
              <p className="text-base font-normal leading-normal text-[#5e818d] dark:text-gray-400">
                We&apos;ve sent a password reset link to <strong>{email}</strong>
              </p>
              <p className="text-sm font-normal leading-normal text-[#5e818d] dark:text-gray-400 mt-4">
                Didn&apos;t receive the email? Check your spam folder or{" "}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary hover:underline font-medium"
                >
                  try again
                </button>
              </p>
            </div>
            <div className="text-center">
              <Link
                href="/login"
                className="text-sm font-normal leading-normal text-[#5e818d] dark:text-gray-400 underline hover:text-primary dark:hover:text-primary transition-colors"
              >
                Return to Login
              </Link>
            </div>
          </main>
          <footer className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              className="text-sm text-[#5e818d] dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
              href="/terms"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm text-[#5e818d] dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
              href="/privacy"
            >
              Privacy Policy
            </Link>
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center group/design-root overflow-x-hidden p-4 bg-background-light dark:bg-background-dark font-display text-[#101618] dark:text-white">
      <div className="flex w-full max-w-md flex-col items-center gap-8">
        {/* Header/Logo */}
        <header className="flex items-center justify-center whitespace-nowrap">
          <Link href="/home" className="flex items-center gap-4 text-[#101618] dark:text-white">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em]">Realtor Services</h2>
          </Link>
        </header>
        {/* Main Content Card */}
        <main className="w-full rounded-xl bg-white dark:bg-background-dark/50 shadow-lg border border-gray-200 dark:border-white/10 p-6 sm:p-8 space-y-6">
          {/* Headline & Instructional Text */}
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl font-black leading-tight tracking-[-0.033em]">Forgot Your Password?</h1>
            <p className="text-base font-normal leading-normal text-[#5e818d] dark:text-gray-400">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
          </div>
          {/* Form */}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Email Input Field */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium leading-normal text-[#101618] dark:text-gray-200" htmlFor="email">
                Email Address
              </label>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101618] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dae3e7] dark:border-gray-600 bg-white dark:bg-background-dark h-14 placeholder:text-[#5e818d] dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                id="email"
                placeholder="you@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Primary CTA Button */}
            <button
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 w-full bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-colors"
              type="submit"
            >
              <span className="truncate">Send Reset Link</span>
            </button>
          </form>
          {/* Secondary Link */}
          <div className="text-center">
            <Link
              href="/login"
              className="text-sm font-normal leading-normal text-[#5e818d] dark:text-gray-400 underline hover:text-primary dark:hover:text-primary transition-colors"
            >
              Return to Login
            </Link>
          </div>
        </main>
        {/* Footer */}
        <footer className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link
            className="text-sm text-[#5e818d] dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
            href="/terms"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm text-[#5e818d] dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
            href="/privacy"
          >
            Privacy Policy
          </Link>
        </footer>
      </div>
    </div>
  );
}

