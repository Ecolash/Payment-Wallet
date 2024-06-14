'use client'

import React, { useState } from 'react';
import {
  HomeIcon,
  LayoutDashboardIcon,
  Wallet2Icon,
  CreditCardIcon,
  ArrowUpDownIcon,
  Settings
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const routes = [
    { path: '/home', icon: <HomeIcon />, label: 'Home' },
    { path: '/dashboard', icon: <LayoutDashboardIcon />, label: 'Dashboard' },
    { path: '/wallet', icon: <Wallet2Icon />, label: 'Wallet' },
    { path: '/cards', icon: <CreditCardIcon />, label: 'Cards' },
    { path: '/transfer', icon: <ArrowUpDownIcon />, label: 'Transfer' },
    { path: '/settings', icon: <Settings />, label: 'Settings' }
  ];

  return (
    <div className="fixed bottom-0 md2:top-0 md2:bottom-auto w-full h-13 bg-navred z-50 pb-0">
      <div className="flex justify-between items-center h-13 text-primary-900 px-2 mt-0.5 pb-0">
        <div className="hidden md2:flex items-center space-x-2">
          <img src="/logo.png" alt="App Logo" className="h-12 w-12 mr-0.5" />
          <span className="text-red-200 text-[34px] font-bold font-sans mt-[-8px]">PayApp</span>
        </div>
        <div className="flex justify-around items-center w-full md2:w-auto mt-1">
          <div className="flex justify-around items-center w-full md2:w-auto">
            {routes.map((route, index) => (
              <NavIcon
                key={index}
                icon={route.icon}
                label={route.label}
                href={route.path}
                isActive={pathname === route.path}
                onClick={() => router.push(route.path)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavIconProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}

const NavIcon: React.FC<NavIconProps> = ({ icon, label, href, isActive, onClick }) => {
  return (
    <div
      className={`flex items-center mx-1 lg:mx-1.5 p-1 pb-[5px] cursor-pointer relative rounded-tl-[10px] rounded-tr-[10px] rounded-br-none rounded-bl-none font-semibold ${
        isActive ? 'text-white bg-red-600 md2:text-indigo-50 md2:bg-blacks scale-150 pb-2 md2:scale-[115%]' : 'text-white hover:text-red-900 rounded-lg hover:scale-[110%] hover:bg-red-300'
      }`}
      onClick={onClick}
    >
      <div className="w-8 h-8 flex justify-center items-center relative group">
        {icon}
        <span className={`absolute bottom-full mb-2 w-auto px-1 py-1 text-sm text-white bg-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 md2:hidden  ${
        isActive ? 'scale-75' : ''}`}>
          {label}
        </span>
      </div>
      <span className="hidden md2:inline-block mx-1 p-1 text-[14px] lg:text-[15px] font-sans">{label}</span>
    </div>
  );
};

export default Navbar;
