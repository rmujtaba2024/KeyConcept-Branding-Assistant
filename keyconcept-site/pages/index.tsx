import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import KeyConcept from "../components/keyconcept";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>KeyConcept - AI Marketing Assistant</title>
        <meta
          name="description"
          content="Generate branding snippets for your product."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <KeyConcept />
    </div>
  );
};

export default Home;
