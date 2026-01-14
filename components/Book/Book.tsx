'use client';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import Card from '../Card/Card';
import styles from './book.module.css';
import { useBook } from '@/hooks/useBook';
import { Contact } from '@/types';

import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const Book = () => {
  const { contacts, isLoading, deleteContact, updateContact } = useBook();
  const [selectedContact, setSelectedContact] = useState<Contact | undefined>();
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleDeleteContact = (contact: Contact) => {
    setSelectedContact(contact);
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleUpdateContact = (contact: Contact) => {};

  return (
    <div className={styles.main_container}>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        contacts.map((contact, index) => {
          return (
            <Card
              key={index}
              contact={contact}
              deleteContact={() => {
                handleDeleteContact(contact);
              }}
              updateContact={() => {
                handleUpdateContact(contact);
              }}
            ></Card>
          );
        })
      )}
      {isModalVisible && selectedContact !== undefined ? (
        <ConfirmationModal
          contact={selectedContact}
          confirm={() => {
            deleteContact(selectedContact);
            toggleModal();
          }}
          abort={toggleModal}
        ></ConfirmationModal>
      ) : null}
    </div>
  );
};

export default Book;
