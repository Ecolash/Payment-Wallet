'use client';
import React, { useState } from 'react';
import BankCard, { FrontFace } from './CreditCard'; 

interface Card {
  bankName: string;
  accountNumber: string;
  cardHolderName: string;
  cvv: string;
  cardType: 'rupay' | 'mastercard' | 'visa';
  expiryDate: string;
}

interface DashboardProps {
  cards: Card[];
}

const Dashboard: React.FC<DashboardProps> = ({ cards }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const selectedCard = cards[selectedCardIndex];

  return (
    <div className="flex flex-col lg:flex-row p-4">
      <div className="flex-grow lg:w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Selected Card</h2>
        </div>
          <BankCard {...selectedCard} />
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Card Details</h3>
          <p><strong>Bank Name:</strong> {selectedCard?.bankName || 'N/A'}</p>
          <p><strong>Account Number:</strong> {selectedCard?.accountNumber || 'N/A'}</p>
          <p><strong>Card Holder Name:</strong> {selectedCard?.cardHolderName || 'N/A'}</p>
          <p><strong>Expiry Date:</strong> {selectedCard?.expiryDate || 'N/A'}</p>
          <p><strong>CVV:</strong> {selectedCard?.cvv || 'N/A'}</p>
        </div>
      </div>
      <div className="flex-grow lg:w-2/3 p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">All Cards</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setSelectedCardIndex(index)}
              className={`cursor-pointer scale-75 w-[400px] px-2 py-2 ${selectedCardIndex === index ? 'ring-2 ring-blue-500 rounded-lg' : ''}`}
            >
              <FrontFace {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
