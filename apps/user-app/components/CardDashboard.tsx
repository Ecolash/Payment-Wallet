'use client';
import React, { ReactNode, useState } from 'react';
import BankCard, { FrontFace } from './CreditCard'; 
import { Button } from '@repo/ui/button';
import { AddCardForm } from './AddCard';
import { CardsType } from '@prisma/client';



interface Card {
  bankName: string;
  accountNumber: string;
  cardHolderName: string;
  cvv: string;
  cardType: CardsType;
  expiryDate: string;
}
interface ModalProps {
  show: boolean;
  handleClose: () => void;
  children: ReactNode;
}

interface DashboardProps {
  cards: Card[];
}

const Modal:React.FC<ModalProps> = ({ show, handleClose, children }) => {
  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="modal-content">
        <button className="close" onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
      <style jsx>{`
        .modal {
          display: ${show ? "block" : "none"};
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0, 0, 0);
          background-color: rgba(0, 0, 0, 0.4);
          padding-top: 60px;
        }
        .modal-content {
          background-color: #fefefe;
          margin: 5% auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
        }
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }
        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

const Dashboard: React.FC<DashboardProps> = ({ cards }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const selectedCard = cards[selectedCardIndex];
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
        <div className="mb-4 flex justify-between">
          <h2 className="text-2xl font-bold">All Cards</h2>
          <div >
          <Button onClick={handleShow}>Add Card</Button>
          <Modal show={showModal} handleClose={handleClose}>
            <AddCardForm />
          </Modal>
          </div>
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
