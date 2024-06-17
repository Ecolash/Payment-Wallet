'use client'
import React, { useState } from 'react';
import { User2Icon, XIcon } from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  phone: string |null;
}

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  const [query, setQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const filteredContacts = query === ''
    ? contacts
    : contacts.filter((contact) =>
        contact.name?.toLowerCase().includes(query.toLowerCase()) ||
        contact.phone?.includes(query)
      );

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const handleClearSelection = () => {
    setSelectedContact(null);
    setQuery('');
  };

  const getInitials = (name: string) => {
    const names = name.split(' ');
    return names.map(n => n[0]).join('');
  };

  return (
    <div className="flex h-full w-auto items-start my-0.5 mx-2 space-x-4">
      <div className="flex flex-col items-center">
        {selectedContact ? (
          <div className="flex flex-col items-center">
            <div className="w-[115px] h-[115px] mt-4 bg-process-500 rounded-full flex items-center justify-center text-[55px] font-bold text-white">
              {getInitials(selectedContact.name)}
            </div>
            <div className="mt-3 text-center">
              <p className="text-[14px] font-semibold">{selectedContact.name}</p>
              <p className="text-neutral-400 font-semibold text-[12.5px] tracking-wide">+91 {selectedContact.phone}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="w-[115px] h-[115px] mt-4 bg-process-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
              <User2Icon className='h-20 w-20'/>
            </div>
            <div className="mt-3 text-center">
              <p className="text-[15px] font-semibold">User Name</p>
              <p className="text-neutral-500 font-semibold text-[13.5px] tracking-wide">Mobile Number</p>
            </div>
          </div>
        )}
      </div>

      <div className="relative mt-1 w-full">
        <div className="flex justify-between">
          <input
            className="flex-1 bg-blacks py-1.5 px-3 text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans text-[13.5px] font-semibold"
            placeholder={selectedContact ? selectedContact.name : "Search..." }
            value={selectedContact ? selectedContact.name : query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {selectedContact && (
            <button
              onClick={handleClearSelection}
              className="ml-2 px-2 py-1 text-xs text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
            >
              <XIcon/>
            </button>
          )}
        </div>
        <div className="mt-1 w-full h-36 border border-neutral-800 bg-blacks rounded-md shadow-lg overflow-y-scroll hide-scrollbar">
          <ul>
            {filteredContacts.map((contact) => (
              <li
                key={contact.id}
                className={`cursor-pointer select-none relative border-b-[1px] bg-blacks text-gray-300 border-neutral-700 py-1.5 px-2 hover:bg-navred hover:text-white ${selectedContact?.id === contact.id ? 'bg-navred text-white' : ''}`}
                onClick={() => handleSelectContact(contact)}
              >
                <span className="flex justify-between">
                  <span className=" font-sans text-[13.5px] font-semibold">{contact.name}</span>
                 {contact.phone && <span className=" font-sans text-[13.5px] font-semibold">+91 {contact.phone}</span>} 
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactList;