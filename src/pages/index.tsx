import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{ backgroundColor: 'rgb(0, 0, 0, 0)' }}
    >
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ color: 'var(--ifm-color-primary)' }}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{ color: 'var(--ifm-color-primary-lightest)' }}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/category/colors">
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
