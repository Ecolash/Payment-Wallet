'use client'
import React, { useState } from 'react';
import CardPagination from './CardPagination';
import { BankCardProps } from './CreditCard';
import ContactList from './ContactList';

interface Account {
  id: string;
  name: string;
  balance: number;
}

interface Contact {
  id: number;
  name: string;
  phone: string | null;
}

interface P2PTransferProps {
  ownAccount: Account;
  cards: BankCardProps[];
  contacts: Contact[];
}

const P2PTransfer: React.FC<P2PTransferProps> = ({ ownAccount, cards, contacts }) => {
  const [selectedAccount, setSelectedAccount] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [transactionType, setTransactionType] = useState<'Send' | 'request'>('Send');

  const handleTransfer = () => {
    console.log(`Transaction Type: ${transactionType}, Amount: ${amount}, Selected Account: ${selectedAccount}`);
  };

  return (
    <div className="px-4 pt-2 mt-2 w-screen h-full md2:max-w-md mx-auto bg-cardblack rounded-xl shadow-md space-y-0.5">
      <h1 className="text-[20px] font-bold mb-0.5 text-neutral-300">P2P Transfer</h1>

      <div className="mx-2">
        <label className="block text-[16px] font-bold font-sans text-neutral-300">Select User</label>
        <ContactList contacts={contacts} />
      </div>

      <div className="mx-2">
        <label className="block text-[16px] font-bold font-sans text-neutral-300">Select Account</label>
        <CardPagination cards={cards} />
      </div>

      <div>
      <label className="block text-[16px] font-bold font-sans text-neutral-300">Amount</label>
      <div className="mb-1 flex flex-row space-x-2 pr-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          className="mt-1 block w-4/6 px-3 py-0.5 border border-gray-300 rounded-xl text-neutral-800  font-sans font-bold text-[15px]"
        />
        <button
          onClick={() => setTransactionType('Send')}
          className={`w-1/6 py-1 mt-1.5 px-3 rounded-full font-sans font-bold text-[12px] ${
            transactionType === 'Send' ? 'bg-success-400 text-neutral-800' : 'bg-gray-200 text-neutral-800'
          }`}
        >
          Send
        </button>
        <button
          onClick={() => setTransactionType('request')}
          className={`w-1/6 py-1 mt-1.5 px-3 rounded-full font-sans font-bold text-[12px] ${
            transactionType === 'request' ? 'bg-process-300 text-neutral-800' : 'bg-gray-200 text-neutral-800'
          }`}
        >
          Request
        </button>
      </div>

      
      <button
        onClick={handleTransfer}
        className="w-full bg-navred text-white py-1 px-2 rounded-3xl hover:bg-red-400 mt-1 mb-2 font-sans font-semibold text-[15px] tracking-wider"
      >
        {transactionType === 'Send' ? 'Send' : 'Request'} ₹{amount.toFixed(2)} {transactionType === 'Send' ? 'to' : 'from'} User
      </button>
    </div>
    </div>
  );
};

export default P2PTransfer;
