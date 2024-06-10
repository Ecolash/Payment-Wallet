'use client'
import React, { useState, useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import PieChart from '../../../components/PieChart1';
import TransactionTable from '../../../components/TransactionTable';
import BarChart from '../../../components/Graph2';



interface Transaction {
  id: number;
  name: string;
  amount: string;
  status: string;
  date: string;
  time: string;
  category: string;
  categoryColor: string;
}

const transactions: Transaction[] = [
  { id: 1, name: 'Spotify', amount: '-$15.00', status: 'Processing', date: '2023-06-07', time: '1:00 PM', category: 'Subscriptions', categoryColor: 'blue-400' },
  { id: 2, name: 'Alexa Doe', amount: '+$88.00', status: 'Success', date: '2023-06-07', time: '2:45 AM', category: 'Deposit', categoryColor: 'green-400' },
  { id: 3, name: 'JSM Pro', amount: '-$18.99', status: 'Processing', date: '2023-06-05', time: '1:10 PM', category: 'Subscriptions', categoryColor: 'blue-400' },
  { id: 4, name: 'Fresh F&V', amount: '-$88.00', status: 'Success', date: '2023-06-06', time: '12:15 PM', category: 'Groceries', categoryColor: 'purple-400' },
  { id: 5, name: 'Figma', amount: '-$18.99', status: 'Processing', date: '2023-06-06', time: '6:10 PM', category: 'Income', categoryColor: 'green-400' },
  { id: 6, name: 'Sam Sulek', amount: '-$40.20', status: 'Declined', date: '2023-06-06', time: '5:40 AM', category: 'Food and dining', categoryColor: 'red-400' },
];

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredTransactions = selectedCategory === 'All'
    ? transactions
    : transactions.filter(transaction => transaction.category === selectedCategory);

  const categories = Array.from(new Set(transactions.map(transaction => transaction.category)));
  categories.unshift('All');

  const expenditureData = useMemo(() => {
    return transactions
      .filter(transaction => transaction.amount.startsWith('-'))
      .reduce((acc, transaction) => {
        const category = transaction.category;
        const amount = parseFloat(transaction.amount.replace('-$', ''));
        if (acc[category]) {
          acc[category] += amount;
        } else {
          acc[category] = amount;
        }
        return acc;
      }, {} as { [key: string]: number });
  }, [transactions]);

  const categoryColors = transactions.reduce((acc, transaction) => {
    acc[transaction.category] = transaction.categoryColor;
    return acc;
  }, {} as { [key: string]: string });

  return (
    <div className='flex flex-wrap'>
    <div className="h-auto w-full bg-cardblacks text-white rounded-xl ">
      <div className="flex flex-row gap-between gap-4">
        <div className="w-3/4">
          <TransactionTable
            transactions={filteredTransactions}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="w-1/4">
          <PieChart data={expenditureData} colors={categoryColors} />
        </div>
      </div>
    </div>
    <BarChart/>
    </div>
  );
};

export default App;
