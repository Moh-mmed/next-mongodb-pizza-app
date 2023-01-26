import { useState } from 'react';
import axios from 'axios'
import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import Add from "../components/Add";
import AddButton from "../components/AddButton";

export default function Home({ data, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList data={data.data} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const myCookie = context.req?.cookies || "";
  let admin = false;
  
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
    const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      data: res.data,
      admin
    },
  };
}
