'use client'
import React, { useState } from 'react';
import { CardsType } from '@prisma/client';
import Image from 'next/image';


export interface BankCardProps {
  bankName?: string;
  accountNumber?: string;
  cardHolderName?: string;
  cvv?: string;
  cardType?: CardsType;
  expiryDate?: string;
}

const BankCard: React.FC<BankCardProps> = ({
  bankName = 'BANK NAME',
  accountNumber = '●●●● ●●●● ●●●● ●●●●',
  cardHolderName = 'CARDHOLDER NAME',
  cvv = 'XXX',
  cardType = '',
  expiryDate = 'MM/YY'
}) => {
  const [isFrontFace, setIsFrontFace] = useState(true);

  const handleClick = () => {
    setIsFrontFace((prevIsFrontFace) => !prevIsFrontFace);
  };

  return (
    <div
      onClick={handleClick}
      className="sm:w-[384px] sm:h-[228px] relative cursor-pointer"
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="w-full h-full relative transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${isFrontFace ? '0deg' : '180deg'})`,
        }}
      >
        <div className="w-full h-full relative inset-0 max-sm:scale-[95%]">
          {isFrontFace ? (
            <FrontFace
              bankName={bankName}
              cardHolderName={cardHolderName}
              accountNumber={accountNumber}
              cardType={cardType}
              expiryDate={expiryDate}
            />
          ) : (
            <div style={{ transform: 'scaleX(-1)' }}>
              <BackFace cvv={cvv} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface FrontFaceProps {
  bankName: string;
  cardHolderName: string;
  accountNumber: string;
  cardType: string;
  expiryDate: string;
}

const FrontFace: React.FC<FrontFaceProps> = ({
  bankName,
  accountNumber,
  cardHolderName,
  cardType,
  expiryDate
}) => {
  return (
    <div className="rounded-xl flex flex-row bg-auto bg-center" style={{ backgroundImage: `url('/Card/5.png')`, backgroundSize: '600px 300px' }}>
      <div className="w-[280px] h-[224px] rounded-xl overflow-visible m-[2px] flex flex-col">
        <div className="px-3 mt-2 w-full h-auto font-sans font-bold text-white text-[19px]">{bankName.toUpperCase()}</div>
        <div className="px-3 w-full mt-[-2px] h-auto font-sans font-bold text-white text-[12px]">CREDIT CARD</div>
        <div className="h-12 my-2">
          <Image width={1000} height={1000} src="/Card/chip2.png" className="mx-3 my-2 h-9 w-14" alt="chip" />
        </div>
        <div className="px-3 w-[330px] my-0 font-sans font-bold text-white text-[24px] tracking-[1.7px]">{accountNumber}</div>
        <div className="flex flex-row w-[290px] my-[-3px]">
          <div className="px-3 my-0.5 w-[280px] font-sans font-bold text-white text-[15.5px] tracking-[1.2px]">{cardHolderName.toUpperCase()}</div>
          <div className="flex flex-col mt-1">
            <div className="px-1 font-sans font-normal text-white text-[9.5px] tracking-[1.1px]">EXPIRES</div>
            <div className="px-1 mx-[-1px] font-sans font-bold text-white text-[11px] tracking-[1.1px]">{expiryDate}</div>
          </div>
        </div>
      </div>
      <div className="w-[95px] h-[224px] rounded-xl m-[2px] flex flex-col overflow-hidden">
        <Image  width={1000} height={1000} src="/Card/pay.png" className="ml-12 my-4 h-[32px] w-[34px]" alt="payment" />
        <div className="h-28"></div>
        <Image  width={1000} height={1000}  src={`/Card/${cardType === 'mastercard' ? 'MasterCard' : cardType === 'visa' ? 'Visa' : cardType === 'rupay' ?  'RuPay' : 'none'}.png`} className="mt-2 ml-1 h-[34px] w-[102px]" alt={cardType} />
      </div>
    </div>
  );
};

interface BackFaceProps {
  cvv: string;
}

const BackFace: React.FC<BackFaceProps> = ({ cvv }) => {
  return (
    <div className="w-[384px] h-[228px] rounded-xl flex flex-row bg-auto bg-center" style={{ backgroundImage: `url('/Card/back.png')`, backgroundSize: '600px 300px'}}>
      <div className="flex flex-col">
        <div className="mt-4 h-8 w-96" />
        <div className="mt-0 h-[70px] bg-[#0e1224] w-96" />
        <div className="h-[28px] bg-gray-400 rounded w-96 flex flex-row text-lg my-0.5 font-medium text-black">
          <div className="bg-gray-400 w-9/12"></div>
          <div className="bg-gray-100 w-3/12 font-sans font-semibold px-3">{cvv}</div>
        </div>
        <div className="text-[12px] font-semibold px-3 text-gray-500 mt-3 mb-2">
          <p> Note: This is a digital version of your original credit card. Do not share your PIN or CVV with anyone. For customer service, contact XXX-XXXX-XXXX</p>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
export {FrontFace, BackFace};
