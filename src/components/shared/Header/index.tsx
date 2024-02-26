"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import NavDesktop from "./NavDesktop";
import { NavLink } from "@/types";
import useScreenSize from "@/hooks/useScreenSize";
import NavMobile from "./NavMobile";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <nav className={styles.wrapper}>
      <motion.section
        className={styles.banner}
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p>
          Vi feirer 20-års jubileum!
          <a
            href="https://www.kajakk-fritid.no/salg"
            target="_blank"
            style={{ color: "#f76565" }}
          >
            {" "}
            Se tilbudene her
          </a>
        </p>
      </motion.section>
      <motion.section
        className={styles.main}
        variants={
          screenSize!.width >= 750
            ? {
                visible: {
                  height: "5rem",
                },
                hidden: {
                  y: "-2rem",
                  height: "2.5rem",
                },
              }
            : {
                visible: { height: "5rem" },
                hidden: { y: "-2rem" },
              }
        }
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <motion.img
              variants={{
                visible: { width: "10rem" },
                hidden: { width: "6rem" },
              }}
              animate={hidden ? "hidden" : "visible"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              src="/images/logo.png"
              alt="E-Wheels Logo"
            />
          </Link>
          {screenSize!.width >= 750 ? (
            <NavDesktop navLinks={navLinks} />
          ) : (
            <NavMobile navLinks={navLinks} />
          )}
        </div>
      </motion.section>
    </nav>
  );
};

export default Header;
