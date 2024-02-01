"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import NavDesktop from "./NavDesktop";
import { NavLink } from "@/types";
import useScreenSize from "@/hooks/useScreenSize";
import NavMobile from "./NavMobile";

const navLinks: NavLink[] = [
  { name: "Våre sykler", href: "/vare-sykler" },
  { name: "Butikk", href: "/butikk" },
  { name: "Verksted", href: "/verksted" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Kontakt", href: "/kontakt-oss" },
];

const Header = () => {
  const screenSize = useScreenSize();

  return (
    <nav className={styles.wrapper}>
      <section className={styles.banner}>
        <p>Norges største leverandør av elsykkel</p>
      </section>
      <section className={styles.main}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <img src="/images/E-wheels_logo.png" alt="E-Wheels Logo" />
          </Link>
          {screenSize.width >= 750 ? (
            <NavDesktop navLinks={navLinks} />
          ) : (
            <NavMobile navLinks={navLinks} />
          )}
        </div>
      </section>
    </nav>
  );
};

export default Header;
