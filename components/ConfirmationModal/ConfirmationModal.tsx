import React from 'react';
import styles from './confirmationmodal.module.css';
import { Contact } from '@/types';

interface ConfirmationModalPtops {
  contact: Contact;
  confirm: () => void;
  abort: () => void;
}

const ConfirmationModal = ({
  contact,
  confirm,
  abort,
}: ConfirmationModalPtops) => {
  return (
    <div className={styles.main_container}>
      <p>Voulez vous supprimer le contact suivant?</p>
      <p>
        {contact.firstName} {contact.lastName}
      </p>
      <div className={styles.button_container}>
        <button onClick={confirm}>OUI</button>
        <button onClick={abort}>NON</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
