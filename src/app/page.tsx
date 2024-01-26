import styles from "./page.module.scss";

import Hero from "@/components/home/Hero";
import Bestsellers from "@/components/home/Bestsellers";
import Articles from "@/components/home/Articles";
import Stores from "@/components/home/Stores";

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
