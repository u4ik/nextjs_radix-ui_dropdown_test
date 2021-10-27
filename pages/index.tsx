import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Dropdown } from "../components";



const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
 
      <Dropdown />
    </div>
  );
};

export default Home;
