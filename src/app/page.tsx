import styles from "./page.module.scss";

import Hero from "@/components/home/Hero";
import Bestsellers from "@/components/home/Bestsellers";
import Articles from "@/components/home/Articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elsykkel Kristiansand",
  description:
    "Utforsk vår store utvalg av elsykler i Kristiansand! Vi tilbyr en rekke elektriske sykler for enhver smak og behov. Fra bypendling til terrengeventyr, vårt sortiment har noe for alle.",
};

export const revalidate = 10;

const Page = () => {
  return (
    <main className={styles.wrapper}>
      <Hero />
      <Bestsellers />
      <Articles />
    </main>
  );
};

export default Page;
