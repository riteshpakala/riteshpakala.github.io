import Layout from '../../components/layout';
import { getAllCreativeIds, getCreativeData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ creativeData }) {
  return (
    <Layout>
      <Head>
        <title>{creativeData.title}</title>
      </Head>
      <article>
        <h1 className={`${utilStyles.headingMd} ${utilStyles.zeroMarginBottom}`}>{creativeData.title}</h1>
        <div className={`${utilStyles.lightText} ${utilStyles.headingSm}`}>
          <Date dateString={creativeData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: creativeData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllCreativeIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const creativeData = await getCreativeData(params.id);
  return {
    props: {
      creativeData,
    },
  };
}
