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
          <h1>Utforsk sørlandet med våre kraftige elsykler</h1>
          <h2>Kom innom oss i Kajakk & Fritid for en hyggelig sykkelprat</h2>
        </div>
        <div className={styles.buttons}>
          <Link href="/vare-sykler" className="button button_tertiary">
            Se våre modeller
          </Link>
          <Link href="/vare-sykler" className="button button_secondary">
            Se butikk
          </Link>
        </div>
      </div>
      {screenSize.width >= 750 ? (
        <Image
          src="/images/hero-image.webp"
          alt="To personer står å prater med hver sin Fosna Elsykkel"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "40%",
          }}
          priority
        />
      ) : (
        <Image
          src="/images/hero-image_mobile.webp"
          alt="To personer står å prater med hver sin Fosna Elsykkel"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "65%",
          }}
          priority
        />
      )}
    </section>
  );
};

export default Hero;
