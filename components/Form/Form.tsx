import React from 'react';
import styles from './form.module.css';
import { Contact } from '@/types';

import { useFormController } from './formController';

interface FormProps {
  contact: Contact;
  isUpdate: boolean;
  submit: () => void;
  abort: () => void;
}

const Form = ({ contact, submit, isUpdate, abort }: FormProps) => {
  const { register, handleSubmit, formState } = useFormController();

  return (
    <div className={styles.main_container}>
      <form onSubmit={submit} className={styles.form}>
        <label htmlFor="">Prénom:</label>
        <input
          {...register('Prénom', { required: 'Le prénom est obligatoire' })}
          type="text"
          className={styles.input}
          defaultValue={isUpdate ? contact.firstName : ''}
        />
        <label htmlFor="">Nom:</label>
        <input
          type="text"
          className={styles.input}
          defaultValue={isUpdate ? contact.lastName : ''}
          {...register('Prénom', { required: 'Le nom est obligatoire' })}
        />
        <label htmlFor="">Genre:</label>
        <input
          type="text"
          className={styles.input}
          defaultValue={isUpdate ? contact.gender : ''}
        />

        <label htmlFor="">Taille:</label>
        <input
          type="number"
          className={styles.input}
          defaultValue={isUpdate ? contact.size : ''}
        />
        <label htmlFor="">Date de naissance:</label>
        <input
          type="text"
          className={styles.input}
          defaultValue={isUpdate ? contact.birth : ''}
        />
        <input type="submit" />
      </form>
      <button onClick={abort}>Annuler</button>
    </div>
  );
};

export default Form;
