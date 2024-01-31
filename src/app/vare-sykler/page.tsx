import React from "react";
import Products from "@/components/vare-sykler/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Våre sykler - Elsykkel Trondheim",
  description:
    "E-wheels er norges største forhandler av elektriske kjøretøy. Se vårt brede sortement av elsykler for dame og herre. Vi har elsykkel for en hver.",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Våre sykler</h1>
        <h2>
          Her ser du noen av våre elsykler. E-Wheels fører kjente merker som
          Momas, Avelo og Fosna.
        </h2>
      </div>
      <Products />
    </main>
  );
};

export default Page;
