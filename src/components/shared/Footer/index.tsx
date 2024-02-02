import Link from "next/link";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.header_inner}>
          <img src="/images/logo.svg" alt="E-Wheels logo" />
          <p>
            Nordens største forhandler av personlige elektriske kjøretøy og
            anses som en pioner i det grønne skiftet. E-Wheels gruppen består av
            E-Wheels Norge AS og E-Wheels Europe AB.
          </p>
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
      </div>
      <div className={styles.footer}>
        <div className={`${styles.footer_inner} max-width`}>
          <p>
            ©2023 E-Wheels Norge AS. Alle rettigheter reservert. Org nr.: 913
            701 380
          </p>
          <ul>
            <li>
              <a href="https://www.facebook.com/Ewheels.no">
                <img src="/icons/facebook.svg" alt="Facebook icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ewheels_scandinavia/">
                <img src="/icons/instagram.svg" alt="Instagram icon" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCDvYXAfIS3VyvP7QmWbmD7Q/videos">
                <img src="/icons/youtube.svg" alt="YouTube icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
