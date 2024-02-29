import styles from "./page.module.scss";

import Hero from "@/components/home/Hero";
import Bestsellers from "@/components/home/Bestsellers";
import Articles from "@/components/home/Articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fredrikstad Elsykkel",
  description:
    "Februar 2024 åpnet Kajakk & Fritid dørene til vår så langt største og råeste butikk i Østfoldhallene i Fredrikstad",
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
