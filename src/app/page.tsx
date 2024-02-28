import styles from "./page.module.scss";

import Hero from "@/components/home/Hero";
import Bestsellers from "@/components/home/Bestsellers";
import Articles from "@/components/home/Articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drammen Elsykkel",
  description:
    "Kajakk og Fritid ble grunnlagt i 2004 med en visjon om å tilby høykvalitets utstyr til de som elsker å utforske naturen gjennom utendørsaktiviteter.",
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
