import prisma from '@repo/db/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import React from 'react';
import Dashboard from '../../../components/CardDashboard';
import { CardsType } from '@prisma/client';



interface CardDashboard {
  card_number: string;
  card_name: string;
  card_cvc: string;
  card_type: CardsType;
  card_expiry: string;
}

async function getCardData(){
  const session=await getServerSession(authOptions);
  const cards=await prisma.cards.findMany({
    where:{
      userId:Number(session?.user?.id)
    }
  });
  return cards.map((c:CardDashboard)=>({
    accountNumber:c.card_number,
    cardHolderName:c.card_name,
    cvv:c.card_cvc,
    cardType:c.card_type,
    expiryDate:c.card_expiry
  }))
}

export default async function() {
  const cardData=await getCardData();
  return (
    <div>
      <Dashboard cards={cardData.map(card => ({
        bankName: "HDFC BANK",//Hard Coded Now
        accountNumber: card.accountNumber,
        cardHolderName: card.cardHolderName,
        cvv: card.cvv,
        cardType: card.cardType ,
        expiryDate: card.expiryDate,
      }))} />
    </div>
  );
};

