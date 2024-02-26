"use client";

import Link from "next/link";
import styles from "./index.module.scss";

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
          <div>
            <h4>Info</h4>
            <ul>
              <li>
                <Link href="/vare-sykler">Våre sykler</Link>
              </li>
              <li>
                <Link href="/om-oss">Om oss</Link>
              </li>
              <li>
                <Link href="/butikk">Butikk</Link>
              </li>
              <li>
                <Link href="/verksted">Verksted</Link>
              </li>
              <li>
                <Link href="/kontakt-oss">Kontakt</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Kontakt oss</h4>
            <ul>
              <li>
                <Link href="https://www.kajakk-fritid.no/kontaktoss">
                  Kundeservice
                </Link>
              </li>
              <li>
                <Link href="tel:004722020022">22 02 00 22</Link>
              </li>
              <li>
                <Link href="https://kajakk-fritid.zendesk.com/hc/no">
                  Ofte stilte spørsmål
                </Link>
              </li>
              <li>
                <Link href="https://kajakk-fritid.zendesk.com/hc/no/articles/11670083912733-Teknisk-hjelp-el-sykkel">
                  Teknisk hjelp
                </Link>
              </li>
            </ul>
          </div>
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
