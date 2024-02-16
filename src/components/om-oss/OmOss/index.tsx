import Link from "next/link";
import styles from "./index.module.scss";

const OmOss = () => {
  return (
    <section className={styles.wrapper}>
      <img src="/images/girl-with-bike.jpg" alt="" />
      <div>
        <h3>Vår historie</h3>
        <p>
          E-Wheels Norge AS ble grunnlagt i 2014 og har vokst til å bli en av
          Nordens ledende forhandlere av personlige elektriske kjøretøy. Med
          over 150 000 fornøyde kunder har E-Wheels vært en pioner innen å gjøre
          mikromobilitet tilgjengelig for alle. I samarbeid med E-Wheels Europe
          AB leverer vi små elektriske kjøretøy til hele Skandinavia, Frankrike
          og Sveits, og er stolte av å representere våre egne merkevarer,
          E-Wheels E2S, Momas og Fosna, i tillegg til andre anerkjente merker
          som Kaabo, Zero, Airwheel, Gotway, Joyor, og Kingsong.
        </p>
        <p>
          Nylig har vi åpnet et nytt verksted i Kristiansand, hvor vi er klare
          til å hjelpe deg med reparasjon og service av dine elektriske
          kjøretøy.
        </p>
        <p>
          Vår historie startet i Drammen i 2014, hvor vi som en av de første
          aktørene i bransjen introduserte enhjulinger for det norske markedet.
          Gjennom årene har E-Wheels tilpasset seg nye lovgivninger og trender,
          og vi har nå blitt en av Nordens største forhandlere av
          el-sparkesykler og el-sykler.
        </p>
        <p>
          Vi forplikter oss til en grønn og bærekraftig fremtid, og vårt mål er
          å fortsette å tilby deg det nyeste innen små elektriske kjøretøy.
          Utforsk E-Wheels i Kristiansand i dag, og bli med oss på reisen mot en
          fremtid med smart, bærekraftig og morsom mobilitet!
        </p>
        <Link href="/vare-sykler" className="button button_primary">
          Se våre modeller
        </Link>
      </div>
    </section>
  );
};

export default OmOss;
