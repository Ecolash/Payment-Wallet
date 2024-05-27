'use client'
import React, { useState, useRef, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactSelectorProps {
  contacts: Contact[];
}

const ContactSelector: React.FC<ContactSelectorProps> = ({ contacts }) => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [query, setQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredContacts = query === ''
    ? contacts
    : contacts.filter((contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase()) ||
        contact.phone.includes(query)
      );

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="relative mt-1">
        <button
          className="relative w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {dropdownOpen && (
          <div ref={dropdownRef} className="absolute mt-2 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <input
              className="w-full border-none py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0"
              placeholder="Search..."
              onChange={(event) => setQuery(event.target.value)}
            />
            <ul className="max-h-60 overflow-y-auto">
              {filteredContacts.map((contact) => (
                <li
                  key={contact.id}
                  className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
                  onClick={() => {
                    setSelectedContact(contact);
                    setDropdownOpen(false);
                  }}
                >
                  <span className="block truncate">{contact.name} - {contact.phone}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {selectedContact && (
        <div className="mt-4 text-center">
          <div className="text-xl font-semibold">{selectedContact.name}</div>
          <div className="text-gray-700">{selectedContact.phone}</div>
        </div>
      )}
    </div>
  );
};

export default ContactSelector;