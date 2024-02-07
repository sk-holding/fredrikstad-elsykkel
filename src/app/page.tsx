import styles from "./page.module.scss";

import Hero from "@/components/home/Hero";
import Bestsellers from "@/components/home/Bestsellers";
import Articles from "@/components/home/Articles";
import Stores from "@/components/shared/Stores";
import { Metadata } from "next";
import { location } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Elsykkel Trondheim",
  description:
    "Er du ute etter elsykkel i Trondheim? Vi har elsykler i som passer alle. Kom innom oss for en trivelig el-sykkelprat!",
};

export const revalidate = 10;

const Page = () => {
  return (
    <main className={styles.wrapper}>
      <Hero />
      <Bestsellers />
      <Articles />
      <Stores
        title="E-Wheels Trondheim"
        description="Kom innom våre flotte butikk i Søndre gate 20"
        location={location.butikk}
      />
    </main>
  );
};

export default Page;
