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
              Kajakk og Fritid ble grunnlagt i 2004 med en visjon om å tilby
              høykvalitets utstyr til de som elsker å utforske naturen gjennom
              utendørsaktiviteter.
            </p>
            <p>
              Fra begynnelsen av har vi hatt et sterkt fokus på å tilby et bredt
              spekter av produkter og tjenester, samtidig som vi opprettholder
              høye standarder for kvalitet og kundeservice.
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
