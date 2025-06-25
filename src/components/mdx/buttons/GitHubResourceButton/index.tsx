import { FaGithub } from 'react-icons/fa';
import ResourceButton, { ResourceButtonProps } from '../../ResourceButton';
import { RESOURCE_BASE_URL } from '@site/src/constants/urls';

type GitHubResourceButtonProps = {
  linkPath: string;
  text?: string;
  style?: ResourceButtonProps['style'];
};

function GitHubResourceButton({
  linkPath,
  style,
  text = 'Source code',
}: GitHubResourceButtonProps) {
  return (
    <ResourceButton
      link={RESOURCE_BASE_URL + linkPath}
      icon={{ element: FaGithub, size: 24 }}
      text={text}
      style={style}
    />
  );
}

export default GitHubResourceButton;
