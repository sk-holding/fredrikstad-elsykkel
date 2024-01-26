import styles from "./index.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <h1>Ute etter elsykkel i Trondheim?</h1>
          <h2>
            Da er du kommet til rett sted! Kom innom oss i midtbyen for en
            trivelig sykkelprat!
          </h2>
        </div>
        <div>
          <Link href="/vare-sykler" className="button button_primary">
            Se våre modeller
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
