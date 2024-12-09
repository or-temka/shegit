import { FaGithub } from 'react-icons/fa';
import ResourceButton, { ResourceButtonProps } from '../../ResourceButton';

type GitHubResourceButtonProps = {
  link: string;
  text?: string;
  style?: ResourceButtonProps['style'];
};

function GitHubResourceButton({ link, style, text = 'Source code' }: GitHubResourceButtonProps) {
  return (
    <ResourceButton link={link} icon={{ element: FaGithub, size: 24 }} text={text} style={style} />
  );
}

export default GitHubResourceButton;
