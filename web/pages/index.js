import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>NextJs app | Home</title>
      <meta name='keywords' content='nextjs' />
    </Head>
   <h1 className={styles.title}>Homepage</h1>
   <p className={styles.title}>Magna sit dolore pariatur cupidatat est ullamco occaecat nisi incididunt consectetur enim esse sit est. Qui aliquip ipsum aliquip cillum eu sint tempor enim laboris incididunt elit aute esse est. Ut amet sit minim voluptate commodo eiusmod eiusmod et magna non.</p>
   <p className={styles.title}>Magna sit dolore pariatur cupidatat est ullamco occaecat nisi incididunt consectetur enim esse sit est. Qui aliquip ipsum aliquip cillum eu sint tempor enim laboris incididunt elit aute esse est. Ut amet sit minim voluptate commodo eiusmod eiusmod et magna non.</p>
    <Link href=""><a className={styles.btn} >See List</a></Link>
    </>
  )
}
