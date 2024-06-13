'use client'
import React from 'react';
import { format, parseISO } from 'date-fns';

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

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions, selectedCategory, setSelectedCategory }) => {
  const categories = Array.from(new Set(transactions.map(transaction => transaction.category)));
  categories.unshift('All');

  return (
    <div className="h-[320px] w-full bg-cardblack text-white py-1.5 rounded-xl mt-2">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[20px] font-bold font-sans pl-2">Merchant Transaction History</h1>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="bg-subblack text-white p-2 mr-2 rounded-md"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="overflow-x-hidden h-[250px]">
          <table className="w-full text-left table-auto">
            <thead className="bg-subblack font-sans font-semibold text-[14px]">
              <tr>
                <th className="px-4 py-2">Transaction</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Day</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Category</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => {
                const parsedDate = parseISO(transaction.date);
                const day = format(parsedDate, 'E');
                const date = format(parsedDate, 'MMM d');

                return (
                  <tr key={transaction.id} className="border-t border-gray-700">
                    <td className="px-4 py-1 flex items-center">
                      <span className="mr-2 font-sans font-semibold text-[13.5px]">{transaction.name}</span>
                    </td>
                    <td className={`px-4 py-1 font-sans font-semibold text-[13.5px] ${transaction.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {transaction.amount}
                    </td>
                    <td className="px-4 py-2">
                      <div className={`py-1 px-2 text-center rounded-full text-[11px] font-bold w-[85px] ${transaction.status === 'Success' ? 'bg-success-300 text-success-800' : transaction.status === 'Declined' ? 'bg-failure-300 text-failure-800' : 'bg-process-300 text-process-800'}`}>
                        {transaction.status}
                      </div>
                    </td>
                    <td className="px-4 py-1 font-sans font-semibold text-[13.5px]">{day}</td>
                    <td className="px-4 py-1 font-sans font-semibold text-[13.5px]">{date}</td>
                    <td className="px-4 py-1 font-sans font-semibold text-[13.5px]">{transaction.time}</td>
                    <td className="px-4 py-1 font-sans font-semibold text-[13.5px] flex items-center">
                      <span className={`py-1 px-3 rounded-full text-xs font-semibold text-${transaction.categoryColor}`}>
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
