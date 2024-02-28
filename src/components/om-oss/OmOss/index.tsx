import Link from "next/link";
import styles from "./index.module.scss";

const OmOss = () => {
  return (
    <section className={styles.wrapper}>
      <img src="/images/girl-with-bike.jpg" alt="" />
      <div>
        <h3>Vår historie</h3>
        <p>
          Kajakk og Fritid ble grunnlagt i 2004 med en lidenskap for å tilby
          enestående utstyr for friluftsentusiaster som elsker å utforske
          naturen. Vår visjon har alltid vært å levere et bredt spekter av
          produkter og tjenester av høy kvalitet, samtidig som vi opprettholder
          et sterkt fokus på kundetilfredshet.
        </p>
        <p>
          Vi tilbyr et variert utvalg av utstyr for utendørsaktiviteter,
          inkludert el-sykler, SUP-brett, kajakker og mer. Vårt sortiment er
          nøye kuratert for å imøtekomme behovene til alle, uavhengig av
          erfaring eller ferdighetsnivå. Vi tror på å tilby det beste utstyret
          til konkurransedyktige priser for å sikre at våre kunder har en
          uforglemmelig opplevelse når de utforsker naturen og alt det den har å
          tilby.
        </p>
        <p>
          Vårt dedikerte team av ansatte deler en felles lidenskap for
          friluftsliv og har omfattende ekspertise som gjør oss i stand til å
          veilede våre kunder til å finne det perfekte utstyret for deres
          eventyr. Vi setter stor pris på den personlige servicen vi tilbyr og
          streber etter å gjøre hvert besøk til en positiv opplevelse for våre
          kunder.
        </p>
        <p>
          Opprinnelig startet vi vår reise i Drammen, men på grunn av økende
          etterspørsel har vi utvidet og åpnet flere butikker. Vi er nå til
          stede i Drammen, Tønsberg, Kristiansand, Lillehammer, Fredrikstad og
          Stavanger, og ser frem til å fortsette vår vekst og ekspansjon. Vårt
          hovedlager, kundeservice og administrasjon er sentralt plassert i
          nærheten av vår butikk i Drammen for å sikre en smidig drift.
        </p>
        <p>
          Vi ser frem til å hjelpe deg med å gjøre ditt neste utendørs eventyr
          til en minneverdig og spennende opplevelse!
        </p>
        <Link href="/vare-sykler" className="button button_primary">
          Se våre elsykler
        </Link>
      </div>
    </section>
  );
};

export default OmOss;
