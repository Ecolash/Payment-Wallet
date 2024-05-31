"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import Link from "next/link";
import HomeScreen from "../components/HomeScreen";
import { PrimaryFeatures } from "../components/AboutSection";
import { Team } from "../components/TeamsSection";
import { ReviewSection } from "../components/ReviewSection";
import { Footer } from "../components/Footer";
import { CTA } from "../components/CTA";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <div className="overflow-x-hidden">
      <header>
        <nav className="sm:px-12 fixed pt-2 z-20 w-full bg-transparent backdrop-blur-2xl navbar shadow-2xl shadow-gray-600/5 border-b border-gray-800 peer-checked:navbar-active">
          <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 pb-2 md:gap-0">
              <div className="w-full items-center flex justify-between lg:w-auto">
                <Link href="/" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                    NextPay
                  </span>
                </Link>
                <Link
                  href={session?.user ? "/dashboard" : "/api/auth/signin"}
                  className="relative lg:hidden flex h-9 items-center justify-center px-3 bg-gradient-to-br from-red-400 to-red-500 rounded"
                >
                  <span className="relative text-sm font-semibold text-gray-900">
                    Get Started
                  </span>
                </Link>
              </div>
              <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border rounded-3xl shadow-2xl shadow-gray-300/20 bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none border-gray-700 lg:border-0">
                <div className="w-full space-y-2 border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                  <Link
                    href={session?.user ? "/dashboard" : "/api/auth/signin"}
                    className="relative ml-5 flex h-9 items-center justify-center sm:px-6 bg-gradient-to-br from-red-400 to-red-500 rounded"
                  >
                    <span className="relative text-sm font-semibold text-white">
                      {session?.user ? "Dashboard" : "Sign in"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <HomeScreen session={session} />
      <PrimaryFeatures />
      <Team />
      <ReviewSection />
      <CTA session={session} />
      <Footer />
    </div>
  );
}
