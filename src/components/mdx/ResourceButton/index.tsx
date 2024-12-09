import { CSSProperties, ReactNode } from 'react';
import { IconType } from 'react-icons';
import styles from './styles.module.css';

export type ResourceButtonProps = {
  link: string;
  children?: ReactNode;
  icon?: {
    element: IconType;
    size?: number;
  };
  text?: string;
  style?: {
    button?: CSSProperties;
    icon?: CSSProperties;
    text?: CSSProperties;
  };
};

function ResourceButton({ children, link, style, icon, text = '' }: ResourceButtonProps) {
  return (
    <a href={link} style={style?.button} className={styles.resourceButton} target="_blank">
      {icon ? (
        <>
          {icon.element({
            style: style?.icon,
            className: styles.resourceButton__icon,
            size: icon.size,
          })}
          <span className={styles.resourceButton__text} style={style?.text}>
            {text}
          </span>
        </>
      ) : (
        children
      )}
    </a>
  );
}

export default ResourceButton;
