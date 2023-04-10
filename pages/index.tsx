import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Loader from '../components/Loader';
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href={{
        pathname: '/[username]',
        query: { username: 'Chang' }
      }}>

      </Link>
      <div>
        <Loader show />
      </div>

      <div>
        <button onClick={() => toast.success("Thsi is a new message")} >
          Press Me
        </button>
      </div>

    </div>
  )
}
