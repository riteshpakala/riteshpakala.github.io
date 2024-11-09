import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { /*getSortedPostsData,*/ getSortedThoughtsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData, allThoughtsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={`${utilStyles.headingSm} ${utilStyles.zeroMargin}`}>
        <p>I write essays & explain tech, simply.</p>
      </section> */}
      <section className={`${utilStyles.headingSm} ${utilStyles.padding1px}`}>
        <h3 className={`${utilStyles.underline}`}>Articles</h3>
        <ul className={utilStyles.list}>
          None at the moment.
          {/* {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))} */}
        </ul>
      </section>
      <section className={`${utilStyles.headingSm} ${utilStyles.padding1px}`}>
        <h3 className={`${utilStyles.underline}`}>Thoughts</h3>
        <ul className={utilStyles.list}>
          {allThoughtsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/thoughts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingSm2} ${utilStyles.padding1px}`}>
      “In the end, we will remember not the words of our enemies, but the silence of our friends.” - Martin Luther King Jr.
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = [];//getSortedPostsData();
  const allThoughtsData = getSortedThoughtsData();
  return {
    props: {
      allPostsData,
      allThoughtsData
    },
  };
}
