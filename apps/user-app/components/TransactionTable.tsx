"use client";
import React from "react";
import { format, parseISO } from "date-fns";

export interface Transaction {
  id: number;
  name: string;
  amount: string;
  status: string;
  date: string;
  time: string;
  category: string;
  categoryColor: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
  selectedCategory,
  setSelectedCategory,
}) => {
  const categories = ["Subscriptions", "Deposit", "Groceries", "Income", "Food and dining"]
  categories.unshift("All");

  return (
    <div className="w-full bg-cardblack text-white py-2 rounded-xl mt-5 border-t-2 border-orange-500">
      <div className="w-full mx-auto">
        <div className="flex px-1 justify-between items-center mb-4">
          <h1 className="text-[20px] font-bold font-sans pl-2">
            Merchant Transaction History
          </h1>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-subblack text-white p-2 mr-2 rounded-md"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="overflow-x-scroll">
          <table className="w-full text-left table-auto">
            <thead className="bg-subblack font-sans font-semibold text-[14px]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Transaction
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Day
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => {
                const parsedDate = parseISO(transaction.date);
                const day = format(parsedDate, "E");
                const date = format(parsedDate, "MMM d");

                return (
                  <tr key={transaction.id} className="border-t border-gray-700">
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 whitespace-nowrap text-white"
                    >
                      <div className="ps-1">
                        <div className="text-base font-semibold">
                          {transaction.name}
                        </div>
                      </div>
                    </th>
                    <td
                      className={`px-6 text-nowrap py-4 ${transaction.amount.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                    >
                      {transaction.amount}
                    </td>
                    <td className="px-6 text-nowrap py-4">
                      <div
                        className={`py-1 px-2 text-center  rounded-full text-[11px] font-bold  ${transaction.status === "Success" ? "bg-success-300 text-green-900" : transaction.status === "Declined" ? "bg-failure-300 text-red-900" : "bg-process-300 text-yellow-900"}`}
                      >
                        {transaction.status}
                      </div>
                    </td>
                    <td className="px-6 text-nowrap py-4">{day}</td>
                    <td className="px-6 text-nowrap py-4">{date}</td>
                    <td className="px-6 text-nowrap py-4">
                      {transaction.time}
                    </td>
                    <td className="px-6 text-nowrap py-4">
                      <span
                        className={`py-1 px-3 rounded-full text-xs font-semibold text-${transaction.categoryColor}`}
                      >
                        {transaction.category}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
