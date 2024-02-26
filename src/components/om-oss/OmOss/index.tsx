import Link from "next/link";
import styles from "./index.module.scss";

const OmOss = () => {
  return (
    <section className={styles.wrapper}>
      <img src="/images/girl-with-bike.jpg" alt="" />
      <div>
        <h3>Vår historie</h3>
        <p>
          Kajakk og Fritid ble grunnlagt i 2004 med en visjon om å tilby
          førsteklasses utstyr for dem som elsker å utforske naturen gjennom
          utendørsaktiviteter. Fra starten av har vi vært engasjert i å tilby et
          bredt utvalg av produkter og tjenester samtidig som vi opprettholder
          høye standarder for kvalitet og kundeservice.
        </p>
        <p>
          Vi tilbyr et mangfoldig sortiment av utstyr for utendørsaktiviteter,
          inkludert el-sykler, SUP-brett, kajakker og mye mer. Vårt utvalg er
          nøye kuratert for å passe til alle ferdighetsnivåer, fra nybegynnere
          til profesjonelle. Vi er overbevist om at ved å tilby det beste
          utstyret til konkurransedyktige priser, kan vi bidra til å sikre at
          våre kunder har en fantastisk opplevelse når de utforsker naturen og
          alt vårt vakre land har å tilby.
        </p>
        <p>
          Vi holder kurs i kajakk ved pittoreske steder som Bygdøy sjøbad i
          Oslo, samt utenfor vår butikk i Drammen. I tillegg tilbyr vi også kurs
          for grupper innen SUP og Packraft. Våre instruktører er sertifiserte
          med høyeste utdanning og sertifisering fra Norges padleforbund, og
          kursene våre kvalifiserer for våttkort.
        </p>
        <p>
          Vårt dedikerte team av ansatte er lidenskapelig opptatt av
          utendørsaktiviteter og har omfattende erfaring som gjør oss i stand
          til å veilede deg som kunde til å finne det perfekte utstyret for dine
          behov. Vi forstår at hver kunde er unik, og vi legger stor vekt på å
          tilby personlig service og rådgivning.
        </p>
        <p>
          Opprinnelig var butikken vår i Drammen den eneste fysiske butikken,
          men på grunn av økende etterspørsel har vi utvidet og åpnet flere
          butikker. For øyeblikket har vi etablert oss i Drammen, Tønsberg,
          Kristiansand og Stavanger, og vi ser frem til videre vekst. Vårt
          hovedlager, kundeservice og administrasjon ligger i nærheten av
          butikken vår i Drammen.
        </p>
        <p>
          Vi ser frem til å hjelpe deg med å finne det ideelle utstyret for å
          gjøre ditt neste utendørs eventyr minneverdig og morsomt.
        </p>
        <Link href="/vare-sykler" className="button button_primary">
          Se våre modeller
        </Link>
      </div>
    </section>
  );
};

export default OmOss;
