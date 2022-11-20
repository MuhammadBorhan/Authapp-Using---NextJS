import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Auth App</title>
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">Hello worlds</h1>
      </main>
    </div>
  );
}
