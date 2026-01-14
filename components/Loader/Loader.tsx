import React from 'react';
import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.main_container}>
      <p className={styles.loading_text}>...Chargement en cours...</p>
    </div>
  );
};

export default Loader;
