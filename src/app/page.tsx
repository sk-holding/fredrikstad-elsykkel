import styles from "./page.module.scss";

import Hero from "@/components/home/Hero";
import Bestsellers from "@/components/home/Bestsellers";
import Articles from "@/components/home/Articles";
import Stores from "@/components/home/Stores";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elsykkel Trondheim",
  description:
    "Er du ute etter elsykkel i Trondheim? Vi har elsykler i som passer alle. Kom innom oss for en trivelig el-sykkelprat!",
};

const Page = () => {
  return (
    <main className={styles.wrapper}>
      <Hero />
      <Bestsellers />
      <Articles />
      <Stores />
    </main>
  );
};

export default Page;
