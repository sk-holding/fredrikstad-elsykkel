import Map from "@/components/shared/Map";
import styles from "./index.module.scss";

const Kontakt = () => {
  return (
    <section className={styles.wrapper}>
      <Map />
      <div>
        <div className={styles.inner}>
          <h3>Telefonsupport</h3>
          <div className={styles.usp}>
            <img src="/icons/phone.svg" alt="phone icon" />
            <a href="tel:004732757632">32 75 76 32</a>
          </div>
          <p>Du når oss på telefon tirsdag - fredag mellom 10.00 og 15.00</p>
          <p>(Obs! Linjen holder stengt i lunsjtider mellom 12.00 og 12.30)</p>
        </div>
        <div className={styles.inner}>
          <h3>Mail</h3>
          <p>
            Ta kontakt med oss via <a href=""> dette kontaktskjemaet</a>, så får
            du svar i løpet av kort tid.
          </p>
        </div>
        <div className={styles.inner}>
          <h3>Butikk</h3>
          <div className={styles.usp}>
            <img src="/icons/house.svg" alt="house icon" />
            <p>Søndre gate 30, 7010 Trondheim</p>
          </div>
          <p>
            Våre dyktige medarbeidere står klare til å ta deg i mot i vår flotte
            butikk i Midtbyen butikker.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
