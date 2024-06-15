"use client";
import React, { useState, useMemo } from "react";
import PieChart from "../../../components/PieChart1";
import TransactionTable from "../../../components/TransactionTable";
import BarChart from "../../../components/Graph2";
import P2PTransferTable from "../../../components/P2PTransferTable";
import { P2PTransfer } from "../../../components/P2PTransferTable";
import { Transaction } from "../../../components/TransactionTable";
import Image from "next/image";
import { ArrowRight, ArrowUp, DollarSign, Send } from "lucide-react";
import { Button } from "@repo/ui/button";

const transactions: Transaction[] = [
  {
    id: 1,
    name: "Spotify",
    amount: "-$15.00",
    status: "Processing",
    date: "2023-06-07",
    time: "1:00 PM",
    category: "Subscriptions",
    categoryColor: "blue-400",
  },
  {
    id: 2,
    name: "Alexa Doe",
    amount: "+$88.00",
    status: "Success",
    date: "2023-06-07",
    time: "2:45 AM",
    category: "Deposit",
    categoryColor: "green-400",
  },
  {
    id: 3,
    name: "JSM Pro",
    amount: "-$18.99",
    status: "Processing",
    date: "2023-06-05",
    time: "1:10 PM",
    category: "Subscriptions",
    categoryColor: "blue-400",
  },
  {
    id: 4,
    name: "Fresh F&V",
    amount: "-$88.00",
    status: "Success",
    date: "2023-06-06",
    time: "12:15 PM",
    category: "Groceries",
    categoryColor: "purple-400",
  },
  {
    id: 5,
    name: "Figma",
    amount: "-$18.99",
    status: "Processing",
    date: "2023-06-06",
    time: "6:10 PM",
    category: "Income",
    categoryColor: "green-400",
  },
  {
    id: 6,
    name: "Sam Sulek",
    amount: "-$40.20",
    status: "Declined",
    date: "2023-06-06",
    time: "5:40 AM",
    category: "Food and dining",
    categoryColor: "red-400",
  },
];

const p2pTransfers: P2PTransfer[] = [
  {
    id: 1,
    name: "John Doe",
    amount: "-$50.00",
    status: "Success",
    date: "2023-06-07",
    time: "1:00 PM",
  },
  {
    id: 2,
    name: "Brian Lara",
    amount: "+$150.00",
    status: "Declined",
    date: "2023-06-08",
    time: "2:50 PM",
  },
  {
    id: 3,
    name: "Rex Glain",
    amount: "-$50.00",
    status: "Processing",
    date: "2023-06-02",
    time: "1:20 PM",
  },
  {
    id: 4,
    name: "Jimmy Doe",
    amount: "+$50.00",
    status: "Success",
    date: "2023-06-07",
    time: "4:00 PM",
  },
  {
    id: 5,
    name: "Jane Smith",
    amount: "+$150.00",
    status: "Success",
    date: "2023-06-07",
    time: "2:45 AM",
  },
  // Add more transfers as needed
];

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredTransactions =
    selectedCategory === "All"
      ? transactions
      : transactions.filter(
          (transaction) => transaction.category === selectedCategory
        );

  const categories = Array.from(
    new Set(transactions.map((transaction) => transaction.category))
  );
  categories.unshift("All");

  const expenditureData = useMemo(() => {
    return transactions
      .filter((transaction) => transaction.amount.startsWith("-"))
      .reduce(
        (acc, transaction) => {
          const category = transaction.category;
          const amount = parseFloat(transaction.amount.replace("-$", ""));
          if (acc[category]) {
            acc[category] += amount;
          } else {
            acc[category] = amount;
          }
          return acc;
        },
        {} as { [key: string]: number }
      );
  }, [transactions]);

  const categoryColors = transactions.reduce(
    (acc, transaction) => {
      acc[transaction.category] = transaction.categoryColor;
      return acc;
    },
    {} as { [key: string]: string }
  );

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  const dynamicGreeting = `${greeting}, Fetch Name. 👋`;

  return (
    <>
      <div className="bg-stone-900 overflow-hidden p-4 md:p-6 rounded-lg mb-8 relative">
        <div className="hidden lg:block mr-16 -mt-4 top-0 right-0 absolute pointer-events-none">
          <svg
          className="hue-rotate-[120deg]"
            width="319"
            height="198"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path id="welcome-a" d="M64 0l64 128-64-20-64 20z"></path>
              <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z"></path>
              <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z"></path>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="welcome-b"
              >
                <stop stopColor="#A5B4FC" offset="0%"></stop>
                <stop stopColor="#818CF8" offset="100%"></stop>
              </linearGradient>
              <linearGradient
                x1="50%"
                y1="24.537%"
                x2="50%"
                y2="100%"
                id="welcome-c"
              >
                <stop stopColor="#4338CA" offset="0%"></stop>
                <stop stopColor="#6366F1" stopOpacity="0" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <g transform="rotate(64 36.592 105.604)">
                <mask id="welcome-d" fill="#fff">
                  <use xlinkHref="#welcome-a"></use>
                </mask>
                <use fill="url(#welcome-b)" xlinkHref="#welcome-a"></use>
                <path
                  fill="url(#welcome-c)"
                  mask="url(#welcome-d)"
                  d="M64-24h80v152H64z"
                ></path>
              </g>
              <g transform="rotate(-51 91.324 -105.372)">
                <mask id="welcome-f" fill="#fff">
                  <use xlinkHref="#welcome-e"></use>
                </mask>
                <use fill="url(#welcome-b)" xlinkHref="#welcome-e"></use>
                <path
                  fill="url(#welcome-c)"
                  mask="url(#welcome-f)"
                  d="M40.333-15.147h50v95h-50z"
                ></path>
              </g>
              <g transform="rotate(44 61.546 392.623)">
                <mask id="welcome-h" fill="#fff">
                  <use xlinkHref="#welcome-g"></use>
                </mask>
                <use fill="url(#welcome-b)" xlinkHref="#welcome-g"></use>
                <path
                  fill="url(#welcome-c)"
                  mask="url(#welcome-h)"
                  d="M40.333-15.147h50v95h-50z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="relative">
          <h1 className="text-white font-bold text-2xl md:text-3xl leading-snug mb-2">
            {dynamicGreeting}
          </h1>
          <p className="text-slate-100">
            Welcome to your dashboard. Scroll to see what's happening with your
            budgets today
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 sm:gap-5 lg:gap-6">
            <div className="bg-[#2a2a2b] rounded-lg h-[200px] text-white p-4 sm:p-5">
              <div className="flex size-12 items-center justify-center rounded-xl bg-red-500 shadow-xl shadow-red-500/50">
                <DollarSign size={24} />
              </div>
              <p className="mt-5">Income</p>
              <p className="mt-2 font-medium text-red-500 dark:text-navy-100">
                <span className="text-2xl">$35</span>
                <span className="text-base">.3k</span>
              </p>
              <p className="mt-1 flex items-center text-xs text-success">
                <ArrowUp size={16} />
                <span className="text-green-400">4.3%</span>
              </p>
            </div>
            <div className="bg-[#2a2a2b] rounded-lg h-[200px] text-white p-4 sm:p-5">
              <div className="flex size-12 items-center justify-center rounded-xl bg-orange-500 shadow-xl shadow-orange-500/50">
                <DollarSign size={24} />
              </div>
              <p className="mt-5">Income</p>
              <p className="mt-2 font-medium text-orange-500 dark:text-navy-100">
                <span className="text-2xl">$35</span>
                <span className="text-base">.3k</span>
              </p>
              <p className="mt-1 flex items-center text-xs text-success">
                <ArrowUp size={16} />
                <span className="text-green-400">4.3%</span>
              </p>
            </div>
            <div className="bg-[#2a2a2b] rounded-lg h-[200px] text-white p-4 sm:p-5">
              <div className="flex size-12 items-center justify-center rounded-xl bg-yellow-500 shadow-xl shadow-yellow-500/50">
                <DollarSign size={24} />
              </div>
              <p className="mt-5">Income</p>
              <p className="mt-2 font-medium text-yellow-500 dark:text-navy-100">
                <span className="text-2xl">$35</span>
                <span className="text-base">.3k</span>
              </p>
              <p className="mt-1 flex items-center text-xs text-success">
                <ArrowUp size={16} />
                <span className="text-green-400">4.3%</span>
              </p>
            </div>
            <div className="bg-[#2a2a2b] rounded-lg h-[200px] text-white p-4 sm:p-5">
              <div className="flex size-12 items-center justify-center rounded-xl bg-green-500 shadow-xl shadow-green-500/50">
                <DollarSign size={24} />
              </div>
              <p className="mt-5">Income</p>
              <p className="mt-2 font-medium text-green-500 dark:text-navy-100">
                <span className="text-2xl">$35</span>
                <span className="text-base">.3k</span>
              </p>
              <p className="mt-1 flex items-center text-xs text-success">
                <ArrowUp size={16} />
                <span className="text-green-400">4.3%</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 w-full mt-2">
            <P2PTransferTable transfers={p2pTransfers} />
          </div>
        </div>

        <div className="col-span-12 lg:order-last lg:col-span-4 flex flex-col">
          <div className="relative flex h-[150px] flex-col overflow-hidden rounded-xl bg-gradient-to-br from-red-500 to-orange-700 p-5 mx-8">
            <div className="h-[100px]">
              <Image
                width={500}
                height={500}
                className="h-3 w-10"
                src="https://lineone.piniastudio.com/images/payments/cc-visa-white.svg"
                alt="image"
              />
            </div>
            <div className="text-white">
              <p className="text-lg font-semibold tracking-wide">$2,139.22</p>
              <p className="mt-1 text-xs font-medium">**** **** **** 8945</p>
            </div>
            <div className="absolute top-0 right-0 -m-3 size-24 rounded-full bg-white/20"></div>
          </div>
          <div className="bg-[#2a2a2b] rounded-lg -mt-12 px-4 pb-5 sm:px-5">
            <div className="mt-12 flex flex-col min-w-1 break-all relative line-clamp-1">
              <div className="flex flex-col justify-between py-3 px-1">
                <h2 className="font-medium text-xl tracking-wide my-1 text-white text-left">
                  Send Money
                </h2>

                <div className="flex space-x-3 my-2 ml-1">
                  <div className="avatar size-8 hover:z-10">
                    <Image
                      width={500}
                      height={500}
                      className="rounded-full h-8 w-8 border border-white"
                      src="https://picsum.photos/50"
                      alt="avatar"
                    />
                  </div>

                  <div className="avatar size-8 hover:z-10">
                    <Image
                      width={500}
                      height={500}
                      className="rounded-full h-8 w-8 border border-white"
                      src="https://picsum.photos/50"
                      alt="avatar"
                    />
                  </div>

                  <div className="avatar size-8 hover:z-10">
                    <Image
                      width={500}
                      height={500}
                      className="rounded-full h-8 w-8 border border-white"
                      src="https://picsum.photos/50"
                      alt="avatar"
                    />
                  </div>

                  <div className="avatar size-8 hover:z-10">
                    <Image
                      width={500}
                      height={500}
                      className="rounded-full h-8 w-8 border border-white"
                      src="https://picsum.photos/50"
                      alt="avatar"
                    />
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-xs+">View All Contacts</p>

                  <button className="btn -mr-1 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 flex justify-center items-center">
                    <ArrowRight size={16} />
                  </button>
                </div>
                <div className="mt-2 space-y-4">
                  <label className="block">
                    <span className="text-xs+">Pay to</span>
                    <input
                      className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="**** **** **** ****"
                      type="text"
                    />
                  </label>
                  <div>
                    <span className="text-xs+">Amount</span>

                    <div className="mt-1.5 flex h-9 -space-x-px">
                      <select className="form-select rounded-l-lg border border-slate-300 bg-neutral-900 px-3 py-2 pr-9 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                        <option>$</option>
                        <option>£</option>
                        <option>€</option>
                      </select>
                      <input
                        className="form-input w-full rounded-r-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Price"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex justify-between text-gray-400 dark:text-navy-300">
                  <p className="text-xs+">Commission:</p>
                  <p>3$</p>
                </div>
                <div className="mt-2 flex justify-between">
                  <p>Total:</p>
                  <p className="font-medium text-green-500">3$</p>
                </div>

                <button className="flex mt-3 gap-2 justify-center items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Send <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
        <TransactionTable
          transactions={filteredTransactions}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <P2PTransferTable transfers={p2pTransfers} />


        <BarChart />
      */}
    </>
  );
};

export default App;
