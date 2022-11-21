import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useSession, getSession, signOut } from "next-auth/react";
import Hero from "./hero";

export default function Home() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Auth App</title>
      </Head>
      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  );
}

// Guest Homepage
function Guest() {
  return (
    <main className="container mx-auto text-center py-12">
      <h1 className="text-3xl font-bold ">Guest Homepage</h1>
      <div className="mt-5">
        <Link
          className="bg-indigo-600 rounded-sm  py-1 px-5 text-white"
          href={"/login"}
        >
          Signin
        </Link>
      </div>
    </main>
  );
}

// Authorize Homepage
function User({ session, handleSignOut }) {
  return (
    <main className="container mx-auto text-center py-12">
      <h1 className="text-3xl font-bold ">Authorize Homepage</h1>
      <div className="details">
        <h5>{session?.user?.name}</h5>
        <h5>{session?.user?.email}</h5>
      </div>
      <div>
        <button
          onClick={handleSignOut}
          className="my-4 bg-indigo-300 px-4 py-1 rounded-sm"
        >
          Signout
        </button>
      </div>
      <div className="mt-5">
        <Link
          className="bg-indigo-600 rounded-sm  py-1 px-5 text-white"
          href={"/profile"}
        >
          Profile Page
        </Link>
      </div>
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
