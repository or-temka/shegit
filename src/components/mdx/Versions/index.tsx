import { NPM_BASE } from './constants';
import { VersionsProps } from './types';
import styles from './index.module.css';

const Versions = ({ created, updated, available }: VersionsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.version}>
        📦 <strong>Since:</strong>
        <a
          href={`${NPM_BASE}${created}`}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {created}
        </a>
      </div>
      <div className={styles.version}>
        📦 <strong>Last updated:</strong>
        <a
          href={`${NPM_BASE}${updated}`}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {updated}
        </a>
      </div>
      <div className={styles.version}>
        📦 <strong>Available in:</strong>
        <a
          href={`${NPM_BASE}${available}`}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {available}
        </a>
      </div>
    </div>
  );
};

export type * from './types';
export * from './constants';
export default Versions;
