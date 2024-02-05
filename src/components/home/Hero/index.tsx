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
          <h1>Ute etter elsykkel i Trondheim?</h1>
          <h2>
            Da er du kommet til rett sted! Kom innom oss i midtbyen for en
            trivelig sykkelprat!
          </h2>
        </div>
        <div>
          <Link href="/vare-sykler" className="button button_primary">
            Se våre modeller
          </Link>
        </div>
      </div>
      {screenSize.width >= 750 ? (
        <Image
          src="/images/hero-image.webp"
          alt="Person på elsykkel med Nidarosdomen i bakgrunn"
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
          alt="Person på elsykkel med Nidarosdomen i bakgrunn"
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
