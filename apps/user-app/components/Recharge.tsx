'use client'
import React, { useState } from 'react';
import CardPagination from './CardPagination';
import { BankCardProps } from './CreditCard';

interface Account {
  id: string;
  name: string;
  balance: number;
}

interface RechargeProps {
  ownAccount: Account;
  cards: BankCardProps[];
  onRecharge: (amount: number) => void;
}

const Recharge: React.FC<RechargeProps> = ({ ownAccount, cards, onRecharge }) => {
  const [selectedAccount, setSelectedAccount] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  const handleRecharge = () => {
    console.log(`Recharge Amount: ${amount}, Selected Account: ${selectedAccount}`);
    onRecharge(amount);
  };

  return (
    <div className="px-4 pt-2 mt-2 w-screen h-full md2:max-w-md mx-auto bg-cardblack rounded-xl shadow-md space-y-0.5">
      <h1 className="text-[20px] font-bold mb-0.5 text-neutral-300">Recharge Wallet</h1>

      <div className="mx-2">
        <label className="block text-[16px] font-bold font-sans text-neutral-300">Select Account</label>
        <CardPagination cards={cards} onSelect={function (card: BankCardProps): void {
                  throw new Error('Function not implemented.');
              } } />
      </div>

      <div>
        <label className="block text-[16px] font-bold font-sans text-neutral-300">Amount</label>
        <div className="mb-1 flex flex-row space-x-2 pr-2">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="mt-1 block w-full px-3 py-0.5 border border-gray-300 rounded-xl text-neutral-800 font-sans font-bold text-[15px]"
          />
        </div>
        
        <button
          onClick={handleRecharge}
          className="w-full bg-navred text-white py-1 px-2 rounded-3xl hover:bg-red-400 mt-1 mb-2 font-sans font-semibold text-[15px] tracking-wider"
        >
          Recharge ₹{amount.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default Recharge;
