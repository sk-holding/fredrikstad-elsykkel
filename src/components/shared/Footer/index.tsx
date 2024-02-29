"use client";

import styles from "./index.module.scss";
import Navigation from "./_components/Navigation";
import { main, support } from "@/lib/menus";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.header_inner}>
          <div>
            <img src="/images/logo_white.png" alt="E-Wheels logo" />
            <p>
              Kajakk og Fritid så dagens lys i 2004 med en klar visjon om å
              tilby førsteklasses utstyr for de som har en lidenskap for å
              utforske naturen gjennom utendørsaktiviteter.
            </p>
            <p>
              Fra starten har selskapet vært dedikert til å tilby et omfattende
              utvalg av produkter og tjenester samtidig som det opprettholder en
              urokkelig standard for kvalitet og kundeservice.
            </p>
          </div>
          <Navigation menu={main} title="Info" />
          <Navigation menu={support} title="Kontakt oss" />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={`${styles.footer_inner} max-width`}>
          <p>Copyright © 2024 Kajakk og Fritid AS - All rights reserved</p>
          <ul>
            <li>
              <a href="https://www.facebook.com/kajakkogfritid">
                <img src="/icons/facebook.svg" alt="Facebook icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/kajakkogfritid/?hl=en">
                <img src="/icons/instagram.svg" alt="Instagram icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
