import { Contact } from '@/types';
import styles from './card.module.css';
import { memo } from 'react';

interface CardProps {
  contact: Contact;
  updateContact: () => void;
  deleteContact: () => void;
}

const RawCard = ({ contact, updateContact, deleteContact }: CardProps) => {
  return (
    <div className={styles.card}>
      <div>
        <p>Prénom: {contact.firstName}</p>
        <p>Nom: {contact.lastName}</p>
        <p>Genre: {contact.gender}</p>
        <p>Taille: {contact.size}</p>
        <p>Date de naissance: {contact.birth}</p>
      </div>

      <div className={styles.button_container}>
        <button className={styles.update_button} onClick={updateContact}>
          Modifier
        </button>
        <button className={styles.delete_button} onClick={deleteContact}>
          Supprimer
        </button>
      </div>
    </div>
  );
};
const Card = memo(RawCard);

export default Card;
