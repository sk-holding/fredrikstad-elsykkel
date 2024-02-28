"use client";

import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";
import useScreenSize from "@/hooks/useScreenSize";

const Hero = () => {
  const screenSize = useScreenSize();

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <h1>Ute etter elsykkel i Drammen?</h1>
          <h2>
            Kajakk og Fritid ble grunnlagt i 2004 med en visjon om å tilby
            høykvalitets utstyr til de som elsker å utforske naturen gjennom
            utendørsaktiviteter.
          </h2>
        </div>
        <div className={styles.buttons}>
          <Link href="/vare-sykler" className="button button_tertiary">
            Se våre Elsykler
          </Link>
          <Link href="/butikk" className="button button_secondary">
            Se butikk
          </Link>
        </div>
      </div>
      <Image
        src="/images/hero-image.webp"
        alt="To personer står å prater med hver sin Fosna Elsykkel"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "20%",
        }}
        priority
      />
    </section>
  );
};

export default Hero;
