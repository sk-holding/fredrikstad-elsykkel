import React from "react";
import Products from "@/components/vare-sykler/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Våre sykler - Drammen Elsykkel",
  description:
    "Oppdag det omfattende spekteret av elektriske sykler i vår kolleksjon, designet for både kvinner og menn. Vi tilbyr et bredt utvalg av elsykler som passer enhver smak og behov, slik at du kan finne den perfekte modellen for deg.",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Våre sykler</h1>
        <h2>
          I vårt sortement finner du blant annet våre egenproduserte sykler av
          merkene Momas, Fosna og Avelo som flere ganger har vært best i test.
        </h2>
      </div>
      <Products />
    </main>
  );
};

export default Page;
