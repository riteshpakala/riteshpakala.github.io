import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData, getSortedThoughtsData, getSortedCreativeData } from '../lib/posts';
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
      <div className={`${utilStyles.row}`}>
        <div className={`${utilStyles.col}`}>
          <section className={`${utilStyles.headingSm} ${utilStyles.padding1px}`}>
            <h3 className={`${utilStyles.underline}`}>Articles</h3>
            <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
          <section className={`${utilStyles.headingSm} ${utilStyles.padding1px}`}>
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
        </div>
        <div className={`${utilStyles.col}`}>
            <div className={`${utilStyles.iframeContainer}`}>
              <iframe
                src="/marbler.html" 
                className="w-full h-full border-0"
                title="background"
              />
              {/* <button className={`${utilStyles.playButton} ${utilStyles.dandelionText}`} onClick={() => document.querySelector('audio').play()}>
                play, "Ether" by Cosmo's Midnight
              </button> */}
            </div>

            {/* <audio src="/ether.mp3" autoPlay loop hidden /> */}
        </div>
      </div>
      {/* <section className={`${utilStyles.headingSm2} ${utilStyles.padding16px}`}>
        “By forcing yourself to write it down, to keep a log of the problems you’ve run into, you begin to see patterns. You start seeing the things you get better at and the things you keep flubbing. And then you know what to work on for next time." - Aaron Swartz
      </section> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
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
