import { Metadata } from "next";
import Butikker from "@/components/butikk/Butikker";

export const metadata: Metadata = {
  title: "Butikk - Drammen Elsykkel",
  description:
    "I vår butikk i Drammen finner du et bredt sortement, med flere forskjellige elsykkelmerker. ",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Våre butikker</h1>
        <h2>
          Siden 2004 har butikken vår i Drammen bydd på et enormt utvalg av
          elsykler, og en stor ekspertise fra våre ansatte.
        </h2>
      </div>
      <Butikker />
    </main>
  );
};

export default Page;
