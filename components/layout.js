import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Ritesh Pakala';
export const siteTitle = 'paka.la';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I write essays & explain tech, simply."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta http-equiv="Content-Language" content="en"></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <header className={styles.header}>
          <header class="flex flex-row justify-between max-w-5xl mx-auto px-4 py-3 sm:px-6">
            <div className={styles.headerContainer}>
              <Link href="/">
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={42}
                  width={42}
                  alt={name}
                />
              </Link>
              &nbsp;
              <h4 className={`${styles.headerText}`}>
                {home ? (<>{name}</>) : (<Link href="/">{name}</Link>)}
              </h4>
            </div>


            <div className={`${styles.headerSocials}`}> 
                <Link href="https://github.com/riteshpakala">
                  <Image
                    priority
                    src="/images/github.png"
                    height={20}
                    width={20}
                    alt={name}
                  />
                </Link>
                {/* <Link href="https://x.com/riteshpakala">
                  <Image
                    priority
                    src="/images/x.png"
                    height={20}
                    width={20}
                    alt={name}
                  />
                </Link> */}
                <Link href="https://linkedin.com/in/rpakala">
                  <Image
                    priority
                    src="/images/linkedin.png"
                    height={20}
                    width={20}
                    alt={name}
                  />
                </Link>
                {/* <Link href="https://youtube.com/pexavc">
                  <Image
                    priority
                    src="/images/youtube.png"
                    height={20}
                    width={30}
                    alt={name}
                  />
                </Link>
                <Link href="https://soundcloud.com/pexavc">
                  <Image
                    priority
                    src="/images/soundcloud.png"
                    height={20}
                    width={20}
                    alt={name}
                  />
                </Link> */}
                {/* <Link href="https://old.paka.la">
                  old
                </Link> */}
              </div>
          </header>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={`${styles.backToHome} ${utilStyles.headingSm2}`}>
          <Link href="/">← home</Link>
        </div>
      )}
    </div>
  );
}
