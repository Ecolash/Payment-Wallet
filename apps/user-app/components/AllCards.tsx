"use client";

import { useState } from "react";
import { CardsType } from "@prisma/client";
import BankCard, { FrontFace } from "./CreditCard";

interface Card {
  bankName: string;
  accountNumber: string;
  cardHolderName: string;
  cvv: string;
  cardType: CardsType;
  expiryDate: string;
}

interface DashboardProps {
  cards: Card[];
}

const AllCards: React.FC<DashboardProps> = ({ cards }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const selectedCard = cards[selectedCardIndex];

  return (
    <>
      {/*Selected Cards*/}
      <div className="bg-transparent w-full max-w-3xl mx-auto lg:px-6 py-8 shadow-md rounded-md flex flex-col-reverse gap-5 lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/2 lg:pr-8 lg:border-r-2 lg:border-slate-800">
          <div className="mb-4">
            <label className="text-gray-200 font-bold text-sm mb-2 block">
              Bank Name:
            </label>
            <input
              id="cardNumber"
              type="text"
              className="flex h-10 w-full outline-none  rounded-md focus:border-2 bg-neutral-900 px-4 py-1.5 text-lg focus:border-red-500"
              readOnly
              value={selectedCard?.bankName || "N/A"}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-200 font-bold text-sm mb-2 block">
              Account Number:
            </label>
            <input
              id="cardNumber"
              type="text"
              className="flex h-10 w-full outline-none  rounded-md focus:border-2 bg-neutral-900 px-4 py-1.5 text-lg focus:border-red-500"
              readOnly
              value={
                selectedCard?.accountNumber &&
                selectedCard.accountNumber.length > 4
                  ? `${selectedCard.accountNumber.slice(0, 4)}-${selectedCard.accountNumber.slice(4, 8)}-${selectedCard.accountNumber.slice(8, 12)}-${selectedCard.accountNumber.slice(12, 16)}`
                  : "N/A"
              }
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-200 font-bold text-sm mb-2 block">
              Card Holder Name:
            </label>
            <input
              id="cardNumber"
              type="text"
              className="flex h-10 w-full outline-none  rounded-md focus:border-2 bg-neutral-900 px-4 py-1.5 text-lg focus:border-red-500"
              readOnly
              value={selectedCard?.cardHolderName || "N/A"}
            />
          </div>
          <div className="flex gap-x-2 mb-4">
            <div className="block">
              <label className="text-gray-200 font-bold text-sm mb-2 block">
                Expiry Date:
              </label>
              <input
                id="expDate"
                type="text"
                className="flex h-10 w-full outline-none  rounded-md focus:border-2 bg-neutral-900 px-4 py-1.5 text-lg focus:border-red-500"
                readOnly
                value={selectedCard?.expiryDate || "N/A"}
              />
            </div>
            <div className="block">
              <label className="text-gray-200 font-bold text-sm mb-2 block">
                CVV:
              </label>
              <input
                id="ccvNumber"
                type="text"
                className="flex h-10 w-full outline-none  rounded-md focus:border-2 bg-neutral-900 px-4 py-1.5 text-lg focus:border-red-500"
                readOnly
                value={selectedCard?.cvv || "N/A"}
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8">
          <BankCard {...selectedCard} />
        </div>
      </div>

      {/*All Cards */}
      <div className="rounded-2xl border border-neutral-950 bg-neutral-900 mb-10 py-8 px-4">
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold ml-2 text-gray100 dark:text-gray-200">
            All your cards
          </p>
        </div>
        <div className="w-full bg-gray-700 h-[1px] mb-[42px]"></div>
        <div className="grid items-center gap-6 grid-cols-1 mb-10 lg:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setSelectedCardIndex(index)}
              className={`cursor-pointer px-2 py-2 ${selectedCardIndex === index ? "ring-2 ring-blue-500 rounded-lg" : ""}`}
            >
              <FrontFace {...card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllCards;
