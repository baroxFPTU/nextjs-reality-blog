import Layout from "components/Layout";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout type="main">
      <div className={styles.container}>
        <h1>Hello</h1>
      </div>
    </Layout>
  );
};

export default Home;
