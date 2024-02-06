import Map from "@/components/shared/Stores/_components/Map";
import { Metadata } from "next";
import Kontakt from "@/components/kontakt-oss/Kontakt";

export const metadata: Metadata = {
  title: "Kontakt - Elsykkel Trondheim",
  description:
    "Noe du lurer på angående elsykkel? Ta kontakt med oss eller se vårt servicesenter, hvor du finner flere gode tips for elsykkel",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Kontakt oss</h1>
        <h2>
          Noe du lurer på? Ta kontakt med oss eller sjekk ut vårt{" "}
          <a href="https://www.e-wheels.no/kundeservice/">kundesenter</a>
        </h2>
      </div>
      <Kontakt />
    </main>
  );
};

export default Page;
