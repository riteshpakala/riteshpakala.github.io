import Layout from '../../components/layout';
import { getAllThoughtIds, getThoughtData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ thoughtData }) {
  return (
    <Layout>
      <Head>
        <title>{thoughtData.title}</title>
      </Head>
      <article>
        <h1 className={`${utilStyles.headingMd} ${utilStyles.zeroMarginBottom}`}>{thoughtData.title}</h1>
        <div className={`${utilStyles.lightText} ${utilStyles.headingSm}`}>
          <Date dateString={thoughtData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: thoughtData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllThoughtIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thoughtData = await getThoughtData(params.id);
  return {
    props: {
      thoughtData,
    },
  };
}
