'use client';
import { createContext, useState, ReactNode, useEffect } from 'react';
import { Contact } from '@/types';
import { ALL_CONTACTS } from '@/constants';

export interface BookContextType {
  contacts: Contact[];
  addContact: () => void;
  deleteContact: (contact: Contact) => void;
  updateContact: (contact: Contact) => void;
  isLoading: boolean;
}

interface BookProviderProps {
  children: ReactNode;
}

export const BookContext = createContext<BookContextType>({
  contacts: [],
  addContact: () => {},
  deleteContact: () => {},
  updateContact: () => {},
  isLoading: true,
});

export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = () => {};
  const deleteContact = (requestedContact: Contact) => {
    const updatedContacts = [...contacts].filter(
      (contact) => contact.id !== requestedContact.id
    );
    setContacts(updatedContacts);
  };

  const updateContact = (requestedContact: Contact) => {};

  const fetchContacts = () => {
    setContacts(ALL_CONTACTS);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(fetchContacts, 1000);
  }, []);

  return (
    <BookContext.Provider
      value={{ isLoading, contacts, addContact, deleteContact, updateContact }}
    >
      {children}
    </BookContext.Provider>
  );
};
