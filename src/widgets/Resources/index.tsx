import CodeSandboxResourceButton from '@site/src/components/mdx/buttons/CodeSandboxResourceButton';
import GitHubResourceButton from '@site/src/components/mdx/buttons/GitHubResourceButton';
import Versions from '@site/src/components/mdx/Versions';
import { ResourcesProps } from './types';

const Resources = ({ constants }: ResourcesProps) => {
  return (
    <>
      <Versions {...constants.versions} />

      <div style={{ display: 'flex', gap: 20 }}>
        <GitHubResourceButton linkPath={constants.resourceLinkPath} />
        <CodeSandboxResourceButton link={constants.codeSandboxLink} />
      </div>
    </>
  );
};

export default Resources;
export type * from './types';
