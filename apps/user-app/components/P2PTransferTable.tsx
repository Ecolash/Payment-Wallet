import React from "react";
import { format, parseISO } from "date-fns";

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
  const [firstName, lastName] = name.split(" ");
  return `${firstName?.charAt(0)}${lastName?.charAt(0)}`;
};

const P2PTransferTable: React.FC<P2PTransferTableProps> = ({ transfers }) => {
  return (
    <>
      {/*<div className="bg-cardblack text-white rounded-xl my-4 border-t-2 border-red-500">
      <div className="w-full mx-auto">
        <div className="overflow-x-scroll rounded-xl">
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
              {transfers.map((transfer) => {
                const parsedDate = parseISO(transfer.date);
                const day = format(parsedDate, "E");
                const date = format(parsedDate, "MMM d");
                const initials = getInitials(transfer.name);

                return (
                  <tr key={transfer.id} className="border-t border-gray-700">
                    <td className="px-4 py-1 flex items-center">
                      <div className="p-0.5 rounded-full bg-navred flex items-center justify-center mr-2">
                        <span className="text-white font-bold text-sm">
                          {initials}
                        </span>
                      </div>
                      <span className="mr-2 font-sans font-semibold text-[14.5px]">
                        {transfer.name}
                      </span>
                    </td>
                    <td
                      className={`px-4 py-1 font-sans font-semibold text-[14.5px] ${transfer.amount.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                    >
                      {transfer.amount}
                    </td>
                    <td className="px-4 py-2">
                      <div
                        className={`py-1 px-2 text-center rounded-full text-[11px] font-bold w-[85px] ${transfer.status === "Success" ? "bg-success-300 text-green-900" : transfer.status === "Declined" ? "bg-failure-300 text-red-900" : "bg-process-300 text-yellow-900"}`}
                      >
                        {transfer.status}
                      </div>
                    </td>
                    <td className="px-4 py-1 font-sans font-semibold text-[14.5px]">
                      {day}
                    </td>
                    <td className="px-4 py-1 font-sans font-semibold text-[14.5px]">
                      {date}
                    </td>
                    <td className="px-4 py-1 font-sans font-semibold text-[14.5px]">
                      {transfer.time}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>*/}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-cardblack text-white rounded-xl my-4 border-t-2 border-red-500">
        <div className="w-full mx-auto">
          <div className="overflow-x-scroll rounded-xl">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-subblack">
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
                </tr>
              </thead>
              <tbody>
                {transfers.map((transfer) => {
                  const parsedDate = parseISO(transfer.date);
                  const day = format(parsedDate, "E");
                  const date = format(parsedDate, "MMM d");
                  const initials = getInitials(transfer.name);

                  return (
                    <tr className="border-t border-gray-600">
                      <th
                        scope="row"
                        className="flex items-center px-6 py-4 whitespace-nowrap text-white"
                      >
                        <div className="p-0.5 rounded-full bg-navred flex items-center justify-center mr-2">
                          <span className="text-white font-bold text-sm">
                            {initials}
                          </span>
                        </div>
                        <div className="ps-1">
                          <div className="text-base font-semibold">
                            {transfer.name}
                          </div>
                        </div>
                      </th>
                      <td
                        className={`px-6 text-nowrap py-4 ${transfer.amount.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                      >
                        {transfer.amount}
                      </td>
                      <td className="px-6 text-nowrap py-4">
                        <div
                          className={`py-1 px-2 text-center  rounded-full text-[11px] font-bold  ${transfer.status === "Success" ? "bg-success-300 text-green-900" : transfer.status === "Declined" ? "bg-failure-300 text-red-900" : "bg-process-300 text-yellow-900"}`}
                        >
                          {transfer.status}
                        </div>
                      </td>
                      <td className="px-6 text-nowrap py-4">{day}</td>
                      <td className="px-6 text-nowrap py-4">{date}</td>
                      <td className="px-6 text-nowrap py-4">{transfer.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default P2PTransferTable;
