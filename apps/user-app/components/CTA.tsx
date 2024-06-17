"use client";

import Link from "next/link";

export function CTA({ session }: { session: any }) {
  const { user } = session || { user: null };
  return (
    <div className="mb-12 px-2 md:px-6 mx-auto mt-16 max-w-7xl">
      <div className="mb-32">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover rounded-2xl"
          style={{
            backgroundPosition:
              '50% center; background-image: url("/hero_bg.webp")',
            height: "250px",
          }}
        ></div>
        <div className="mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center text-gray-200">
            <div
              className="block rounded-lg shadow-lg shadow-[#8d141469] px-6 py-12 backdrop-blur-2xl pb-8 md:py-16 md:px-12"
              style={{
                marginTop: "-170px",
                background: "#0e0e0eb3",
              }}
            >
              <h1 className="text-3xl clash sm:text-6xl xl:text-7xl font-bold tracking-tight mb-8">
                Save your <span className="bg-gradient-to-b from-zinc-100 clash to-red-400 bg-clip-text text-transparent">Finances</span>
              </h1>
              <Link
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm bg-gradient-to-bl from-red-500 to-[#de122e] text-gray-100 hover:bg-gradient-to-tr duration-300 ease-in-out transition-all h-11 px-8 font-semibold"
                  href={user ? "/dashboard" : "/api/auth/signin"}
                >
                  Get Started
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
