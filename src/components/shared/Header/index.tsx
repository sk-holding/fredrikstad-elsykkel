"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.scss";

const navLinks = [
  { name: "Våre sykler", href: "/vare-sykler" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Butikker", href: "/butikker" },
];

const Header = () => {
  const pathName = usePathname();

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
          <div className={styles.links}>
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
        </div>
      </section>
    </nav>
  );
};

export default Header;
