import { FiCodesandbox } from 'react-icons/fi';
import ResourceButton, { ResourceButtonProps } from '../../ResourceButton';

type CodeSandboxResourceButtonProps = {
  link: string;
  text?: string;
  style?: ResourceButtonProps['style'];
};

function CodeSandboxResourceButton({
  link,
  style,
  text = 'Code sandbox',
}: CodeSandboxResourceButtonProps) {
  return (
    <ResourceButton
      link={link}
      icon={{ element: FiCodesandbox, size: 24 }}
      text={text}
      style={style}
    />
  );
}

export default CodeSandboxResourceButton;
