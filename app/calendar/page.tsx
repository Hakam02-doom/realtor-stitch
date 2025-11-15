"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState("5");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 px-4 py-4">
              <Link className="text-[#5e818d] dark:text-gray-400 text-base font-medium leading-normal hover:text-primary" href="/">
                Home
              </Link>
              <span className="text-[#5e818d] dark:text-gray-400 text-base font-medium leading-normal">/</span>
              <Link className="text-[#5e818d] dark:text-gray-400 text-base font-medium leading-normal hover:text-primary" href="/home">
                Search
              </Link>
              <span className="text-[#5e818d] dark:text-gray-400 text-base font-medium leading-normal">/</span>
              <Link className="text-[#5e818d] dark:text-gray-400 text-base font-medium leading-normal hover:text-primary" href="/details">
                Property Details
              </Link>
              <span className="text-[#5e818d] dark:text-gray-400 text-base font-medium leading-normal">/</span>
              <span className="text-[#101618] dark:text-white text-base font-medium leading-normal">Book Viewing</span>
            </div>
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex w-full sm:min-w-72 flex-col gap-3">
                <p className="text-[#101618] dark:text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                  Schedule a Viewing for 123 Maple Street, Anytown, USA
                </p>
                <p className="text-[#5e818d] dark:text-gray-300 text-base font-normal leading-normal">
                  Select an available date and time to tour this property.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 mt-8 p-4">
              {/* Left Column: Scheduler */}
              <div className="w-full lg:w-3/5 flex flex-col gap-8">
                {/* Property Card */}
                <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6 p-6 rounded-lg bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-800">
                  <div className="flex flex-col gap-1 flex-[2_2_0px]">
                    <p className="text-[#5e818d] dark:text-gray-400 text-sm font-normal leading-normal">
                      Property Information
                    </p>
                    <p className="text-[#101618] dark:text-white text-base font-bold leading-tight">
                      123 Maple Street, Anytown, USA
                    </p>
                    <p className="text-[#5e818d] dark:text-gray-400 text-sm font-normal leading-normal">
                      Listed by Jane Doe
                    </p>
                  </div>
                  <div className="w-full sm:w-48 bg-center bg-no-repeat aspect-video sm:aspect-square bg-cover rounded-lg flex-1 relative overflow-hidden">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuASaAQOlwcSMRPUrCuMlKJt8WKHHvJCZq-Q0hyUkjE27xGPNMr6tceKc-HLDpnOmEaWX8YUQO6B25gCNheWzQiOmze-4jLGus2om2cTO8imUA7MAdgQt6FhvmeJYQLKb7uC6CaP5Vq4zdIUOrBfbkONqxGCE6R4rc44Qeb_ZJHp4MOo8yDnPYUF3Bcv_rl0XpebJJsXSCT1XxZ3ErzxiwirrqzzCY8U1ftHKmCtDI-3jg1uVsDuF9UoKumiFNlOjjTKaI7Wesp-4_7F"
                      alt="Exterior view of a modern house with a large front yard."
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                {/* Section Header */}
                <h2 className="text-[#101618] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-0 pb-3 pt-5">
                  Select a Date &amp; Time
                </h2>
                {/* Calendar and Time Slots */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Calendar Picker */}
                  <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
                    <div className="flex items-center p-1 justify-between">
                      <button className="text-[#101618] dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <span className="material-symbols-outlined">chevron_left</span>
                      </button>
                      <p className="text-[#101618] dark:text-white text-base font-bold leading-tight flex-1 text-center">
                        October 2024
                      </p>
                      <button className="text-[#101618] dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-7">
                      <p className="text-[#101618] dark:text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                        S
                      </p>
                      <p className="text-[#101618] dark:text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                        M
                      </p>
                      <p className="text-[#101618] dark:text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                        T
                      </p>
                      <p className="text-[#101618] dark:text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                        W
                      </p>
                      <p className="text-[#101618] dark:text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                        T
                      </p>
                      <p className="text-[#101618] dark:text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                        F
                      </p>
                      <p className="text-[#101618] dark:text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                        S
                      </p>
                      <button
                        onClick={() => setSelectedDate("1")}
                        className="h-12 w-full text-gray-400 dark:text-gray-600 col-start-4 text-sm font-medium leading-normal cursor-not-allowed"
                        disabled
                      >
                        <div className="flex size-full items-center justify-center rounded-full">1</div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("2")}
                        className="h-12 w-full text-gray-400 dark:text-gray-600 text-sm font-medium leading-normal cursor-not-allowed"
                        disabled
                      >
                        <div className="flex size-full items-center justify-center rounded-full">2</div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("3")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          3
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("4")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          4
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("5")}
                        className={`h-12 w-full text-white text-sm font-medium leading-normal ${
                          selectedDate === "5" ? "bg-primary" : ""
                        }`}
                      >
                        <div className="flex size-full items-center justify-center rounded-full bg-primary">5</div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("6")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          6
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("7")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          7
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("8")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          8
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("9")}
                        className="h-12 w-full text-gray-400 dark:text-gray-600 text-sm font-medium leading-normal cursor-not-allowed"
                        disabled
                      >
                        <div className="flex size-full items-center justify-center rounded-full">9</div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("10")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          10
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("11")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          11
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("12")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          12
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("13")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          13
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("14")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          14
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("15")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          15
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("16")}
                        className="h-12 w-full text-gray-400 dark:text-gray-600 text-sm font-medium leading-normal cursor-not-allowed"
                        disabled
                      >
                        <div className="flex size-full items-center justify-center rounded-full">16</div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("17")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          17
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("18")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          18
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("19")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          19
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("20")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          20
                        </div>
                      </button>
                      <button
                        onClick={() => setSelectedDate("21")}
                        className="h-12 w-full text-[#101618] dark:text-white text-sm font-medium leading-normal"
                      >
                        <div className="flex size-full items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          21
                        </div>
                      </button>
                    </div>
                  </div>
                  {/* Time Slot Picker */}
                  <div className="flex-1 w-full md:w-auto">
                    <h3 className="text-[#101618] dark:text-white font-bold text-base mb-4">
                      Available Times for Oct {selectedDate}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <button
                        onClick={() => setSelectedTime("09:00 AM")}
                        className={`px-4 py-2 text-sm font-semibold rounded-full border transition-colors ${
                          selectedTime === "09:00 AM"
                            ? "border-primary bg-primary text-white"
                            : "border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
                        }`}
                      >
                        09:00 AM
                      </button>
                      <button
                        onClick={() => setSelectedTime("10:00 AM")}
                        className={`px-4 py-2 text-sm font-semibold rounded-full border transition-colors ${
                          selectedTime === "10:00 AM"
                            ? "border-primary bg-primary text-white"
                            : "border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
                        }`}
                      >
                        10:00 AM
                      </button>
                      <button
                        onClick={() => setSelectedTime("11:00 AM")}
                        className={`px-4 py-2 text-sm font-semibold rounded-full border transition-colors ${
                          selectedTime === "11:00 AM"
                            ? "border-primary bg-primary text-white"
                            : "border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
                        }`}
                      >
                        11:00 AM
                      </button>
                      <button
                        onClick={() => setSelectedTime("01:00 PM")}
                        className={`px-4 py-2 text-sm font-semibold rounded-full border transition-colors ${
                          selectedTime === "01:00 PM"
                            ? "border-primary bg-primary text-white"
                            : "border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
                        }`}
                      >
                        01:00 PM
                      </button>
                      <button
                        onClick={() => setSelectedTime("02:00 PM")}
                        className={`px-4 py-2 text-sm font-semibold rounded-full border transition-colors ${
                          selectedTime === "02:00 PM"
                            ? "border-primary bg-primary text-white"
                            : "border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
                        }`}
                      >
                        02:00 PM
                      </button>
                      <button
                        className="px-4 py-2 text-sm font-semibold rounded-full border border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                        disabled
                      >
                        03:00 PM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column: Summary & Form */}
              <div className="w-full lg:w-2/5 lg:sticky top-8 self-start">
                <div className="bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-800 rounded-lg p-6 flex flex-col gap-6">
                  <h3 className="text-xl font-bold text-[#101618] dark:text-white">Your Viewing Request</h3>
                  {/* Booking Summary */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#5e818d] dark:text-gray-400">Date:</span>
                      <span className="font-semibold text-[#101618] dark:text-white">
                        Saturday, October {selectedDate}, 2024
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#5e818d] dark:text-gray-400">Time:</span>
                      <span className="font-semibold text-[#101618] dark:text-white">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-[#5e818d] dark:text-gray-400">Address:</span>
                      <span className="font-semibold text-[#101618] dark:text-white text-right">
                        123 Maple Street, Anytown, USA
                      </span>
                    </div>
                  </div>
                  <hr className="border-gray-200 dark:border-gray-700" />
                  {/* Confirmation Form */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-[#101618] dark:text-white">Your Details</h4>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#5e818d] dark:text-gray-400 mb-1" htmlFor="name">
                          Full Name
                        </label>
                        <input
                          className="w-full bg-background-light dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:ring-primary focus:border-primary dark:text-white"
                          id="name"
                          placeholder="John Doe"
                          type="text"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#5e818d] dark:text-gray-400 mb-1" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="w-full bg-background-light dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:ring-primary focus:border-primary dark:text-white"
                          id="email"
                          placeholder="john.doe@example.com"
                          type="email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#5e818d] dark:text-gray-400 mb-1" htmlFor="phone">
                          Phone Number
                        </label>
                        <input
                          className="w-full bg-background-light dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:ring-primary focus:border-primary dark:text-white"
                          id="phone"
                          placeholder="(123) 456-7890"
                          type="tel"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#5e818d] dark:text-gray-400 mb-1" htmlFor="message">
                          Message (Optional)
                        </label>
                        <textarea
                          className="w-full bg-background-light dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:ring-primary focus:border-primary dark:text-white"
                          id="message"
                          placeholder="Any specific questions?"
                          rows={3}
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <button className="w-full bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-primary/90 transition-colors text-base">
                    Schedule Viewing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

