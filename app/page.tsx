"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoadingPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    // Navigate based on selected role
    if (selectedRole === "services") {
      router.push("/details");
    } else {
      router.push("/home");
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center p-5 sm:px-10 md:px-20 lg:px-40">
          <div className="layout-content-container flex w-full flex-col max-w-[960px] flex-1">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dae3e7] dark:border-white/10 px-6 sm:px-10 py-4">
              <div className="flex items-center gap-4 text-[#101618] dark:text-white">
                <div className="size-6 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_535)">
                      <path
                        clipRule="evenodd"
                        d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                        fill="currentColor"
                        fillRule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_6_535">
                        <rect fill="white" height="48" width="48"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-[#101618] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                  Realty Co
                </h2>
              </div>
                    <Link href="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-black text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                      <span className="truncate">Log In</span>
                    </Link>
            </header>
            <main className="flex flex-col items-center py-12 sm:py-20 gap-10 sm:gap-12">
              <div className="flex flex-col gap-3 p-4 text-center">
                <p className="text-[#101618] dark:text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                  What brings you here today?
                </p>
                <p className="text-[#5e818d] dark:text-gray-400 text-base font-normal leading-normal">
                  Select your role to get started with our platform.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <div
                  onClick={() => handleRoleSelect("buy-sell")}
                  className={`flex flex-1 cursor-pointer flex-col gap-3 rounded-lg border-2 p-6 transition-all hover:shadow-lg ${
                    selectedRole === "buy-sell"
                      ? "border-primary bg-primary/20 dark:bg-primary/30"
                      : "border-[#dae3e7] bg-white dark:border-white/20 dark:bg-background-dark/50 hover:border-primary"
                  }`}
                >
                  <div className="text-primary" data-icon="House">
                    <span className="material-symbols-outlined">home</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#101618] dark:text-white text-base font-bold leading-tight">
                      I want to buy or sell a property
                    </h2>
                    <p className="text-[#5e818d] dark:text-gray-300 text-sm font-normal leading-normal">
                      Explore listings and connect with top real estate agents.
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => handleRoleSelect("professional")}
                  className={`flex flex-1 cursor-pointer flex-col gap-3 rounded-lg border-2 p-6 transition-all hover:shadow-lg ${
                    selectedRole === "professional"
                      ? "border-primary bg-primary/20 dark:bg-primary/30"
                      : "border-[#dae3e7] bg-white dark:border-white/20 dark:bg-background-dark/50 hover:border-primary"
                  }`}
                >
                  <div className="text-[#101618] dark:text-white" data-icon="Toolbox">
                    <span className="material-symbols-outlined">work</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#101618] dark:text-white text-base font-bold leading-tight">
                      I&apos;m looking for a professional
                    </h2>
                    <p className="text-[#5e818d] dark:text-gray-400 text-sm font-normal leading-normal">
                      Find trusted photographers, inspectors, and other service providers.
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => handleRoleSelect("services")}
                  className={`flex flex-1 cursor-pointer flex-col gap-3 rounded-lg border-2 p-6 transition-all hover:shadow-lg ${
                    selectedRole === "services"
                      ? "border-primary bg-primary/20 dark:bg-primary/30"
                      : "border-[#dae3e7] bg-white dark:border-white/20 dark:bg-background-dark/50 hover:border-primary"
                  }`}
                >
                  <div className="text-[#101618] dark:text-white" data-icon="User">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#101618] dark:text-white text-base font-bold leading-tight">
                      I want to offer my services
                    </h2>
                    <p className="text-[#5e818d] dark:text-gray-400 text-sm font-normal leading-normal">
                      Create your professional profile and connect with new clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex px-4 py-3 justify-center w-full">
                <button
                  onClick={handleContinue}
                  disabled={!selectedRole}
                  className="flex w-full max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="truncate">Continue</span>
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
