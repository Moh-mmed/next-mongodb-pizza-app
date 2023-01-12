import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import axios from 'axios'

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList data={data.data} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products')

  return {
    props: {
      data: res.data
    },
  };
}
