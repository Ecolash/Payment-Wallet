"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import NavLink from "./ui/NavLink";

export function Header({ session: { user } = { user: null } }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  const links = [
    {
      title: "Home",
      path: "#home",
    },
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Features",
      path: "#features",
    },
    {
      title: "Team",
      path: "#team",
    },
    {
      title: "Reviews",
      path: "#reviews",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];
  return (
    <>
      <header className="border-b-[0.5px] border-gray-100/20 fixed w-full top-0 z-[99] bg-transparent backdrop-blur-md">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-16">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link href="/" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  NextPay
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li className="space-x-10">
                    {links.map((link, index) => (
                      <Link
                        key={index}
                        className="transition text-gray-200 hover:text-gray-200/75"
                        href={link.path}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-4">
                <Link
                  href={user ? "/dashboard" : "/api/auth/signin"}
                  className="relative ml-5 flex h-9 items-center justify-center sm:px-6 bg-gradient-to-br from-red-400 to-red-500 rounded px-2"
                >
                  <span className="relative text-sm font-semibold text-white">
                    {user ? "Dashboard" : "Sign in"}
                  </span>
                </Link>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={handleMenuOpen}
                  className="p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-gray-900 text-gray-100 hover:bg-gray-900/80"
                >
                  <MenuIcon size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div
          className="md:hidden sm:block fixed bg-gradient-to-b from-neutral-950 to-slate-950 z-50 w-full h-fit flex flex-col items-center justify-start text-center gap-7 pt-5 pb-5 border-b-[0.5px] border-opacity-20 border-gray-500 top-[4rem]"
          style={{ boxShadow: "inset 0 -10px 10px -10px #7b7575b3" }}
        >
          {links.map((link: any, index: any) => (

            <NavLink item={link} key={index} handleMenuOpen={handleMenuOpen} />
          ))}
        </div>
      )}
    </>
  );
}
