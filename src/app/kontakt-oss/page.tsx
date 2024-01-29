import Map from "@/components/shared/Map";
import styles from "./page.module.scss";
import { Metadata } from "next";
import ArticleCard from "@/components/shared/ArticleCard";

export const metadata: Metadata = {
  title: "Kontakt - Elsykkel Trondheim",
  description:
    "Noe du lurer på angående elsykkel? Ta kontakt med oss eller se vårt servicesenter, hvor du finner flere gode tips for elsykkel",
};

const Page = () => {
  return (
    <main className={`max-width`}>
      <div className="title-block">
        <h1>Kontakt oss</h1>
        <h2>
          Noe du lurer på? Ta kontakt med oss eller sjekk ut vårt
          <a href="https://www.e-wheels.no/kundeservice/"> kundesenter</a>
        </h2>
      </div>
      <div className={styles.wrapper}>
        <Map />
        <div className={styles.inner}>
          <div>
            <p>
              <b>Telefon: </b>
              <a href="tel:004732757632">32 75 76 32</a>
            </p>
            <p>
              <b>Adresse:</b> Søndre gate 30, 7010 Trondheim
            </p>
          </div>
          <div>
            <a
              className="button button_primary"
              href="https://www.e-wheels.no/kundeservice/kontakt-oss/"
            >
              Kontakt oss
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
