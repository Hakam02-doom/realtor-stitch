"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light group/design-root dark:bg-background-dark overflow-x-hidden font-display">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col w-full flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
              <div className="hidden md:flex flex-col relative">
                <Image
                  src="/new2.avif"
                  alt="A modern and luxurious home interior with large windows and clean lines."
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col items-center justify-center bg-white dark:bg-background-dark p-8 sm:p-12 md:p-16">
                <div className="flex flex-col w-full max-w-md">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-primary text-4xl">real_estate_agent</span>
                    <span className="text-2xl font-bold text-[#101618] dark:text-white">RealtorCo</span>
                  </div>
                  <div className="flex flex-wrap justify-between gap-3 mb-4">
                    <p className="text-[#101618] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                      Welcome Back
                    </p>
                  </div>
                  <p className="text-[#5e818d] dark:text-gray-300 text-base font-normal leading-normal mb-8">
                    Log in to access your account.
                  </p>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col min-w-40 flex-1">
                      <p className="text-[#101618] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                        Email or Username
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101618] dark:text-white dark:bg-background-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dae3e7] dark:border-gray-600 bg-white focus:border-primary h-14 placeholder:text-[#5e818d] dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                        placeholder="Enter your email or username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col min-w-40 flex-1">
                      <div className="flex justify-between items-baseline pb-2">
                        <p className="text-[#101618] dark:text-gray-200 text-base font-medium leading-normal">Password</p>
                        <Link href="/forgot" className="text-primary hover:text-primary/80 text-sm font-normal leading-normal underline cursor-pointer">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="flex w-full flex-1 items-stretch">
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-[#101618] dark:text-white dark:bg-background-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dae3e7] dark:border-gray-600 bg-white focus:border-primary h-14 placeholder:text-[#5e818d] dark:placeholder:text-gray-400 p-[15px] border-r-0 pr-2 text-base font-normal leading-normal"
                          placeholder="Enter your password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          onClick={togglePasswordVisibility}
                          className="text-[#5e818d] dark:text-gray-400 flex border border-[#dae3e7] dark:border-gray-600 bg-white dark:bg-background-dark items-center justify-center px-4 rounded-r-lg border-l-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined cursor-pointer">
                            {showPassword ? "visibility_off" : "visibility"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center justify-center font-bold text-white rounded-lg h-14 px-6 mt-8 w-full bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 dark:ring-offset-background-dark text-base transition-colors">
                    Login
                  </button>
                  <p className="text-[#5e818d] dark:text-gray-300 text-sm font-normal leading-normal pt-8 text-center">
                    Don&apos;t have an account?{" "}
                    <Link className="font-medium text-primary hover:text-primary/80 underline" href="/signup">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

