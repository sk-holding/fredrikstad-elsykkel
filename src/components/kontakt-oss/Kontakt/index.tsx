import Map from "@/components/shared/Stores/_components/Map";
import styles from "./index.module.scss";
import Stores from "@/components/shared/Stores";

const Kontakt = () => {
  return (
    <section className={styles.wrapper}>
      <Map location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1784.379949884692!2d10.397339413853091!3d63.43368117675889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d315e3ee04e79%3A0xb1c2b3bc8f0f53a8!2sE-Wheels%20Trondheim%20-%20Elsykkel%20og%20Elsparkesykkel%20butikk!5e0!3m2!1sno!2sus!4v1707214519532!5m2!1sno!2sus" />
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
            <a href="https://www.google.com/maps/place/S%C3%B8ndre+gate+20,+7010+Trondheim/@63.4336655,10.3998397,17z/data=!4m6!3m5!1s0x466d319c0cfad391:0x54e4d362b382d640!8m2!3d63.4336655!4d10.3998397!16s%2Fg%2F11c12r6vwt">
              Søndre gate 30, 7010 Trondheim
            </a>
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
