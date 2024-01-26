import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";

const Page = () => {
  return (
    <main>
      <div className="title-block">
        <h1>Hvem er vi?</h1>
        <h2>
          Vi er norges største leverandør av små elektriske kjøretøy. Du finner
          oss i Søndre gate 20.
        </h2>
        <section className={`${styles.wrapper} max-width`}>
          <img src="/images/girl-with-bike.jpg" alt="" />
          <div>
            <h3>Vår historie</h3>
            <p>
              E-Wheels Norge AS ble grunnlagt i 2014 og har vokst til å bli en
              av Nordens ledende forhandlere av personlige elektriske kjøretøy.
              Med over 150 000 fornøyde kunder har E-Wheels vært en pioner innen
              å gjøre mikromobilitet tilgjengelig for alle. I samarbeid med
              E-Wheels Europe AB leverer vi små elektriske kjøretøy til hele
              Skandinavia og Frankrike, og vi er stolte av å representere våre
              egne merkevarer, E-Wheels E2S og Momas, i tillegg til andre
              anerkjente merker som Kaabo, Zero, Airwheel, Gotway, Joyor, og
              Kingsong.
            </p>
            <p>
              I hjertet av Trondheim inviterer E-Wheels deg til en unik
              opplevelse av personlig elektrisk transport. Utforsk vårt
              omfattende utvalg, fra pålitelige og rimelige modeller til
              eksklusive premiumalternativer, og finn det perfekte kjøretøyet
              som passer dine behov og preferanser.
            </p>
            <p>
              Vår historie startet i Drammen i 2014, hvor vi som en av de første
              aktørene i bransjen introduserte enhjulinger for det norske
              markedet. Gjennom årene har E-Wheels tilpasset seg nye
              lovgivninger og trender, og vi har nå blitt en av Nordens største
              forhandlere av el-sparkesykler og el-sykler.
            </p>
            <p>
              Vi forplikter oss til en grønn og bærekraftig fremtid, og vårt mål
              er å fortsette å tilby deg det nyeste innen små elektriske
              kjøretøy. Utforsk E-Wheels Trondheim i dag, og bli med oss på
              reisen mot en fremtid med smart, bærekraftig og morsom mobilitet!
            </p>
            <Link href="/vare-sykler" className="button button_primary">
              Se våre modeller
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Page;
