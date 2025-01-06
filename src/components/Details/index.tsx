import { useState } from 'react';
import styles from './style.module.css';
import { DetailsProps } from './types';

function Details({ children, headerText = 'headerText' }: DetailsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.details}>
      <button className={styles.button} onClick={toggleDetails}>
        <div className={styles.rect} style={{ transform: `rotate(${isOpen ? 0 : 180}deg)` }}></div>
        {headerText}
      </button>
      {isOpen ? <div className={styles.content}>{children}</div> : <></>}
    </div>
  );
}

export default Details;
