"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.scss";
import { useState } from "react";

const navLinks = [
  { name: "Våre sykler", href: "/vare-sykler" },
  { name: "Butikk", href: "/butikk" },
  { name: "Verksted", href: "/verksted" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Kontakt", href: "/kontakt-oss" },
];

const Header = () => {
  const pathName = usePathname();
  const [menuState, setMenuState] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

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
          <div
            className={`${styles.links} ${
              menuState ? styles.visible : styles.hidden
            }`}
          >
            <div className={styles.closeMenuIcon} onClick={toggleMenu}>
              <img src="./icons/closeMenuIcon.svg" alt="menu icon" />
            </div>
            {navLinks.map((link, idx) => {
              const isActive = pathName.startsWith(link.href);
              return (
                <Link
                  href={link.href}
                  key={idx}
                  className={isActive ? styles.active : ""}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <img src="./icons/menuIcon.svg" alt="menu icon" />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Header;
