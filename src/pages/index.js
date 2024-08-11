import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ProjectsList from '../components/ProjectsList';
import AuthorCard from '../components/AuthorCard'
import styles from './index.module.css'

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <div
        className={styles.container}
      >
        <header className={styles.header}>
          <AuthorCard />
        </header>
        <main className={styles.main}>
          <ProjectsList />
        </main>
      </div>
    </Layout>
  );
}