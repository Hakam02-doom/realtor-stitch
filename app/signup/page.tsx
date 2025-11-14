"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#dae3e7] dark:border-b-[#2a3c42] px-4 sm:px-10 py-3">
              <Link href="/home" className="flex items-center gap-4 text-black dark:text-white">
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
                <h2 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                  Realtor Services
                </h2>
              </Link>
              <div className="hidden md:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <a className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
                    Professional Services
                  </a>
                  <a className="text-black dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
                    Stories
                  </a>
                </div>
                <div className="flex gap-2">
                  <Link
                    href="/signup"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                  >
                    <span className="truncate">Sign Up</span>
                  </Link>
                  <Link
                    href="/login"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f4f5] dark:bg-gray-800 text-black dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="truncate">Sign In</span>
                  </Link>
                </div>
              </div>
            </header>
            <main className="flex flex-col items-center justify-center flex-1 py-12">
              <div className="w-full max-w-md px-4">
                <div className="text-center mb-8">
                  <p className="text-black dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    Create Your Account
                  </p>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <label className="flex flex-col w-full">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Full Name</p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cccccc] dark:border-[#5e818d] bg-white dark:bg-background-dark focus:border-primary h-14 placeholder:text-[#5e818d] p-[15px] text-base font-normal leading-normal"
                        placeholder="Enter your full name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col w-full">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Email Address</p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cccccc] dark:border-[#5e818d] bg-white dark:bg-background-dark focus:border-primary h-14 placeholder:text-[#5e818d] p-[15px] text-base font-normal leading-normal"
                        placeholder="Enter your email address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col w-full">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Password</p>
                      <div className="relative flex w-full flex-1 items-stretch">
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cccccc] dark:border-[#5e818d] bg-white dark:bg-background-dark focus:border-primary h-14 placeholder:text-[#5e818d] p-[15px] pr-12 text-base font-normal leading-normal"
                          placeholder="Create a password"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 hover:opacity-70 transition-opacity"
                        >
                          <span className="material-symbols-outlined text-[#5e818d] cursor-pointer">
                            {showPassword ? "visibility_off" : "visibility"}
                          </span>
                        </button>
                      </div>
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col w-full">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Confirm Password</p>
                      <div className="relative flex w-full flex-1 items-stretch">
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cccccc] dark:border-[#5e818d] bg-white dark:bg-background-dark focus:border-primary h-14 placeholder:text-[#5e818d] p-[15px] pr-12 text-base font-normal leading-normal"
                          placeholder="Confirm your password"
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                        />
                        <button
                          type="button"
                          onClick={toggleConfirmPasswordVisibility}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 hover:opacity-70 transition-opacity"
                        >
                          <span className="material-symbols-outlined text-[#5e818d] cursor-pointer">
                            {showConfirmPassword ? "visibility_off" : "visibility"}
                          </span>
                        </button>
                      </div>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="form-checkbox h-4 w-4 rounded text-primary border-[#cccccc] dark:border-[#5e818d] bg-white dark:bg-background-dark focus:ring-primary"
                      id="terms"
                      name="agreeToTerms"
                      type="checkbox"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="ml-2 block text-sm text-[#5e818d] dark:text-[#b0c7d1]" htmlFor="terms">
                      I agree to the{" "}
                      <Link className="font-medium text-primary hover:underline" href="/terms">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link className="font-medium text-primary hover:underline" href="/privacy">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                  <button
                    className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                    type="submit"
                  >
                    <span className="truncate">Sign Up</span>
                  </button>
                  <div className="text-center">
                    <p className="text-sm text-[#5e818d] dark:text-[#b0c7d1]">
                      Already have an account?{" "}
                      <Link className="font-medium text-primary hover:underline" href="/login">
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

