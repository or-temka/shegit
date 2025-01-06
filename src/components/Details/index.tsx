import { useState } from 'react';
import styles from './style.module.css';
import { DetailsProps } from './types';

function Details({ children, headerText = 'headerText', style }: DetailsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.details} style={style?.wrapper}>
      <button className={styles.button} onClick={toggleDetails} style={style?.button}>
        <div
          className={styles.rect}
          style={{ transform: `rotate(${isOpen ? 0 : 180}deg)`, ...style?.buttonIcon }}
        ></div>
        {headerText}
      </button>
      {isOpen ? (
        <div className={styles.content} style={style?.content}>
          {children}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Details;
