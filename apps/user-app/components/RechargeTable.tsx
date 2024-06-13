'use client'
import React from 'react';
import { format, parseISO } from 'date-fns';

interface RechargeTransaction {
  id: number;
  cardHolderName: string;
  amount: number;
  date: string;
  time: string;
  cardType: string;
}

interface RecentRechargesProps {
  transactions: RechargeTransaction[];
}

const RecentRecharges: React.FC<RecentRechargesProps> = ({ transactions }) => {
  return (
    <div className="h-[320px] w-full bg-cardblack text-white py-1.5 rounded-xl mt-2">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[20px] font-bold font-sans pl-2">Recent Recharges</h1>
        </div>
        <div className="overflow-x-hidden h-[250px]">
          <table className="w-full text-left table-auto">
            <thead className="bg-subblack font-sans font-semibold text-[14px]">
              <tr>
                <th className="px-4 py-2">Card Holder</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Card Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => {
                const parsedDate = parseISO(transaction.date);
                const date = format(parsedDate, 'MMM d, yyyy');
                const time = format(parsedDate, 'hh:mm a');

                return (
                  <tr key={transaction.id} className="border-t border-gray-700">
                    <td className="px-4 py-1 flex items-center">
                      <span className="mr-2 font-sans font-semibold text-[13.5px]">{transaction.cardHolderName}</span>
                    </td>
                    <td className="px-4 py-1 font-sans font-semibold text-[13.5px] text-green-400">
                      +₹{transaction.amount.toFixed(2)}
                    </td>
                    <td className="px-4 py-1 font-sans font-semibold text-[13.5px]">{date}</td>
                    <td className="px-4 py-1 font-sans font-semibold text-[13.5px]">{time}</td>
                    <td className="px-4 py-1 font-sans font-semibold text-[13.5px]">{transaction.cardType}</td>
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

export default RecentRecharges;
