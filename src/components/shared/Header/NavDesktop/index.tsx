import Link from "next/link";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import { NavLink } from "@/types";

interface Props {
  navLinks: NavLink[];
}

const NavDesktop: React.FC<Props> = ({ navLinks }) => {
  const pathName = usePathname();

  return (
    <div className={styles.wrapper}>
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
  );
};

export default NavDesktop;
