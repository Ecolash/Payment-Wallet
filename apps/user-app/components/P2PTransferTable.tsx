'use client'
import React from 'react';
import { format, parseISO } from 'date-fns';

export interface P2PTransfer {
  id: number;
  name: string;
  amount: string;
  status: string;
  date: string;
  time: string;
}

export interface P2PTransferTableProps {
  transfers: P2PTransfer[];
}

const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(' ');
  return `${firstName?.charAt(0)}${lastName?.charAt(0)}`;
};

const P2PTransferTable: React.FC<P2PTransferTableProps> = ({ transfers }) => {
  return (
    <div className="h-[320px] w-[780px] bg-cardblack text-white py-1.5 rounded-xl mt-2">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center mt-2 mb-2">
          <h1 className="text-[20px] font-bold font-sans pl-2">P2P Transfer History</h1>
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
              </tr>
            </thead>
            <tbody>
              {transfers.map(transfer => {
                const parsedDate = parseISO(transfer.date);
                const day = format(parsedDate, 'E');
                const date = format(parsedDate, 'MMM d');
                const initials = getInitials(transfer.name);

                return (
                  <tr key={transfer.id} className="border-t border-gray-700">
                    <td className="px-4 py-1 flex items-center">
                      <div className="w-[28px] h-[28px] p-0.5 rounded-full bg-navred flex items-center justify-center mr-2">
                        <span className="text-white font-bold text-sm">{initials}</span>
                      </div>
                      <span className="mr-2 font-sans font-semibold text-[13.5px]">{transfer.name}</span>
                    </td>
                    <td className={`px-4 py-1 font-sans font-semibold text-[13.5px] ${transfer.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {transfer.amount}
                    </td>
                    <td className="px-4 py-2">
                      <div className={`py-1 px-2 text-center rounded-full text-[11px] font-bold w-[85px] ${transfer.status === 'Success' ? 'bg-success-300 text-success-800' : transfer.status === 'Declined' ? 'bg-failure-300 text-failure-800' : 'bg-process-300 text-process-800'}`}>
                        {transfer.status}
                      </div>
                    </td>
                    <td className="px-4 py-1 font-sans font-semibold text-[13.5px]">{day}</td>
                    <td className="px-4 py-1 font-sans font-semibold text-[13.5px]">{date}</td>
                    <td className="px-4 py-1 font-sans font-semibold text-[13.5px]">{transfer.time}</td>
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

export default P2PTransferTable;
