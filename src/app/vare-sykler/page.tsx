import React from "react";
import Products from "@/components/vare-sykler/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Våre sykler - Elsykkel Kristiansand",
  description:
    "Utforsk vårt store utvalg av elsykler for både kvinner og menn. Vi har en elsykkel for enhver smak og behov.",
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
