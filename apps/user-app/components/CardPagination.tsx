'use client'
import React, { useState } from 'react';
import BankCard, { BankCardProps } from './CreditCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export interface CardPaginationProps {
  cards: BankCardProps[];
  onSelect: (card: BankCardProps) => void;
}

const CardPagination: React.FC<CardPaginationProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="scale-[85%]">        
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <button onClick={handlePrevious} className= "bg-neutral-700 hover:bg-neutral-600 rounded-full p-2 mr-2">
          <ArrowLeft className="w-6 h-6 text-white font-bold" />
        </button>
        <BankCard {...cards[currentIndex]} />
        <button onClick={handleNext} className="bg-neutral-700 hover:bg-neutral-600 rounded-full p-2 ml-2">
          <ArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
    </div>

  );
};

export default CardPagination;
