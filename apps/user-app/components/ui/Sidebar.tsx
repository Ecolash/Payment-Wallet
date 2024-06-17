"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import {
  HomeIcon,
  LayoutDashboardIcon,
  Wallet2Icon,
  CreditCardIcon,
  ArrowUpDownIcon,
} from "lucide-react";

const Sidebar = () => {  
  const location = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(false);
  };
  const router = useRouter();
  async function handleLogout() {
    try {
      signOut();
      router.push("/api/auth/signin");
    } catch {
      console.log("Failed to logout");
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      setIsOpen(false);
      setIsMenuOpen(false);
    };
  }, [location]);

  const navlinks = [
    {
      title: "Dashboard",
      icon: LayoutDashboardIcon,
      link: "/dashboard",
    },
    {
      title: "Home",
      icon: HomeIcon,
      link: "/home",
    },
    {
      title: "Wallet",
      icon: Wallet2Icon,
      link: "/wallet",
    },
    {
      title: "Cards",
      icon: CreditCardIcon,
      link: "/cards",
    },
    {
      title: "Transfer",
      icon: ArrowUpDownIcon,
      link: "/transfer",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b bg-neutral-950 border-gray-900">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                onClick={handleMenuToggle}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link href="/dashboard" className="flex pl-4 items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  NextPay
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                    onClick={handleToggle}
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      width={500}
                      height={500}
                      className="w-10 h-10 rounded-full"
                      src="https://picsum.photos/50" // User icon here !
                      loading="lazy"
                      alt=""
                    />
                  </button>
                </div>
                {isOpen && (
                  <div
                    className="z-50 absolute top-12 right-1 lg:right-3 my-4 text-base list-none  divide-y rounded shadow bg-gray-700 divide-gray-600"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm text-white" role="none">
                        Fetch Name Here
                      </p>
                      <p
                        className="text-sm font-medium  truncate text-gray-300"
                        role="none"
                      >
                        Fetch email here
                      </p>
                    </div>
                    <ul className="p-4" aria-labelledby="user-menu-button">
                      <li>
                        <button
                          onClick={handleLogout}
                          className="bg-red-500 hover:bg-red-600 duration-75 text-white p-2 rounded-md w-full text-center"
                        >
                          Sign out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`z-10 w-64 fixed inset-y-0 left-0 pt-16 flex-shrink-0 lg:translate-x-0  bg-gray-900 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-hidden px-3 pb-4 pt-6 bg-neutral-950">
          <ul className="space-y-3 font-medium">
            {navlinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className={
                  location === link.link
                    ? "flex items-center p-2 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br rounded-lg group text-white"
                    : "flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                }
              >
                <link.icon />
                <span className="ms-3">{link.title}</span>
              </Link>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
