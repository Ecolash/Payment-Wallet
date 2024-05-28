import React from 'react';
import Dashboard from '../../../components/CardDashboard';

const cardData = [
  {
    bankName: 'Bank A',
    accountNumber: '1234 5678 9012 3456',
    cardHolderName: 'John Doe',
    cvv: '123',
    cardType: 'visa',
    expiryDate: '12/24',
  },
  {
    bankName: 'Bank B',
    accountNumber: '2345 6789 0123 4567',
    cardHolderName: 'Jane Smith',
    cvv: '456',
    cardType: 'astercard',
    expiryDate: '11/23',
  },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <Dashboard cards={cardData.map(card => ({
        bankName: card.bankName,
        accountNumber: card.accountNumber,
        cardHolderName: card.cardHolderName,
        cvv: card.cvv,
        cardType: card.cardType as "visa" | "mastercard" | "rupay",
        expiryDate: card.expiryDate,
      }))} />
    </div>
  );
};

export default HomePage;