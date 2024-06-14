import P2PTransfer from '../../../components/P2PTransfer';
import { BankCardProps } from '../../../components/CreditCard';
import prisma from '@repo/db/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
interface contacts{
  id:string,
  name:string,
  phone:string|null
}

async function getUsers(){
  const session=await getServerSession(authOptions);
  const users=await prisma.user.findMany({
    where:{
      id:{
        not:Number(session?.user?.id)
      }
    }
  });
  return users.map((u)=>({
    id:u.id,
    name:u.name,
    phone:u.number
  }))
}
export default async function(){
  const contacts=await getUsers();
  const ownAccount = { id: '1', name: 'My Account', balance: 1000 };
  const otherAccounts = [
    { id: '2', name: 'Alice', balance: 500 },
    { id: '3', name: 'Bob', balance: 750 },
  ];

  // const contacts = [
  // { id: 1, name: 'John Doe', phone: '9876543210' },
  // { id: 2, name: 'Steve Smith', phone: '8877554491' },
  // { id: 3, name: 'Alice Johnson', phone: '8564568792' },
  // { id: 4, name: 'Bob Brown', phone: '8654865486' },  
  // { id: 5, name: 'Jane Smith', phone: '9875321451' },
  // { id: 6, name: 'Travis Johnson', phone: '9654789654' },
  // { id: 7, name: 'Alex Brown', phone: '8775441234' },
  // { id: 8, name: 'Tuhin Mondal', phone: '9546744558' },
  // // Add more contacts as needed
  // ];

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


return (
  
  <div>
  <P2PTransfer ownAccount={ownAccount} cards={cards} contacts={contacts} />    
  </div>
  );
};

