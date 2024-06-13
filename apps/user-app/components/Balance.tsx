'use client'
import React from 'react';

interface WalletBalanceProps {
  balance: number;
}

const WalletBalance: React.FC<WalletBalanceProps> = ({ balance }) => {
  return (
    <div className="px-4 pt-2 mt-2 w-auto h-1/6 md2:max-w-md mx-auto bg-cardblack rounded-xl shadow-md space-y-0.5">
      <h1 className="text-[20px] font-bold mb-0.5 text-neutral-300">Wallet Balance</h1>
      <div className="mx-2">
        <p className="block text-[16px] font-bold font-sans text-neutral-300">
          Current Balance: ₹{balance.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default WalletBalance;
