import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { /*getSortedPostsData,*/ getSortedThoughtsData, getSortedCreativeData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData, allThoughtsData, allCreativeData }) {
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
      {/* <section className={`${utilStyles.headingSm} ${utilStyles.padding1px}`}>
        <h3 className={`${utilStyles.underline}`}>Creative</h3>
        <ul className={utilStyles.list}>
          {allCreativeData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/creative/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section> */}
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
      {/* <section className={`${utilStyles.headingSm2} ${utilStyles.padding16px}`}>
      “By forcing yourself to write it down, to keep a log of the problems you’ve run into, you begin to see patterns. You start seeing the things you get better at and the things you keep flubbing. And then you know what to work on for next time." - Aaron Swartz
      </section> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = [];//getSortedPostsData();
  const allThoughtsData = getSortedThoughtsData();
  const allCreativeData = getSortedCreativeData();
  return {
    props: {
      allPostsData,
      allThoughtsData,
      allCreativeData
    },
  };
}
