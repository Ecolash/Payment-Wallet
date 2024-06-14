'use client'
import React, { useState } from 'react';
import Recharge from '../../../components/Recharge';
import WalletBalance from '../../../components/Balance';
import { BankCardProps } from '../../../components/CreditCard';

const App: React.FC = () => {
  const [balance, setBalance] = useState<number>(1000);

  const ownAccount = { id: '1', name: 'My Account', balance: balance };

  const cards: BankCardProps[] = [
    {
      bankName: 'Bank One',
      accountNumber: '1234 5678 9012 3456',
      cardHolderName: 'John Doe',
      cvv: '123',
      cardType: 'visa',
      expiryDate: '12/24',
    },
    {
      bankName: 'Bank Two',
      accountNumber: '2345 6789 0123 4567',
      cardHolderName: 'Jane Smith',
      cvv: '456',
      cardType: 'mastercard',
      expiryDate: '11/25',
    },
    {
      bankName: 'Bank Three',
      accountNumber: '3456 7890 1234 5678',
      cardHolderName: 'Alice Johnson',
      cvv: '789',
      cardType: 'rupay',
      expiryDate: '10/26',
    },
  ];

  const handleRecharge = (amount: number) => {
    setBalance(balance + amount);
  };

  return (
    <div>
      <WalletBalance balance={balance} />
      <Recharge ownAccount={ownAccount} cards={cards} onRecharge={handleRecharge} />
    </div>
  );
};

export default App;
