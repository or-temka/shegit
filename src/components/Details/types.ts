import { ReactNode } from 'react';

export type DetailsProps = {
  children: ReactNode;
  headerText: string;
  style?: {
    wrapper?: React.CSSProperties;
    button?: React.CSSProperties;
    buttonIcon?: React.CSSProperties;
    content?: React.CSSProperties;
  };
};
