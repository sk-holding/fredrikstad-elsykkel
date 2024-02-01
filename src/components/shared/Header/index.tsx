"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import NavDesktop from "./NavDesktop";
import { NavLink } from "@/types";
import useScreenSize from "@/hooks/useScreenSize";
import NavMobile from "./NavMobile";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const navLinks: NavLink[] = [
  { name: "Våre sykler", href: "/vare-sykler" },
  { name: "Butikk", href: "/butikk" },
  { name: "Verksted", href: "/verksted" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Kontakt", href: "/kontakt-oss" },
];

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const screenSize = useScreenSize();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className={styles.wrapper}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <section className={styles.banner}>
        <p>Norges største leverandør av elsykkel</p>
      </section>
      <section className={styles.main}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <img src="/images/E-wheels_logo.png" alt="E-Wheels Logo" />
          </Link>
          {screenSize!.width >= 750 ? (
            <NavDesktop navLinks={navLinks} />
          ) : (
            <NavMobile navLinks={navLinks} />
          )}
        </div>
      </section>
    </motion.nav>
  );
};

export default Header;
