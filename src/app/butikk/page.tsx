import { Metadata } from "next";
import Butikker from "@/components/butikk/Butikker";

export const metadata: Metadata = {
  title: "Butikk - Elsykkel Kristiansand",
  description:
    "I vår nyåpnede butikk i Kristiansand finner du et bredt sortement, med flere forskjellige elsykkelmerker. ",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Våre butikker</h1>
        <h2>
          Vår nyåpnede butikk i Kristiansand byr på et enromt utvalg av
          elsykler, og stor ekspertise fra våre ansatte.
        </h2>
      </div>
      <Butikker />
    </main>
  );
};

export default Page;
