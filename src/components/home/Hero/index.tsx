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
          <h1>Ser du etter elsykkel i Fredrikstad?</h1>
          <h2>
            Vi har akkurat åpnet dørene til Norges råeste elsykkelbutikk i
            Østfoldhallene. Kom innom oss å finn ditt nye eventyr!
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
      {screenSize.width >= 770 ? (
        <Image
          src="/images/hero-image.webp"
          alt="Innsiden av Kajakk & Fritids butikk i Fredrikstad"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      ) : (
        <Image
          src="/images/hero-image_mobile.webp"
          alt="Innsiden av Kajakk & Fritids butikk i Fredrikstad"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      )}
    </section>
  );
};

export default Hero;
