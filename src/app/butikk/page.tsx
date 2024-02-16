import { Metadata } from "next";
import Butikker from "@/components/butikk/Butikker";
import Stores from "@/components/shared/Stores";
import { location } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Butikk - Elsykkel Trondheim",
  description:
    "Kom innom vår flotte butikk i Søndre gate 30 for en trivelig elsykkelprat. Våre dyktige medarbeidere står klare til å hjelpe deg.",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Våre butikker</h1>
        <h2>
          E-Wheels har flere butikker i Norge, Sverige og Sveits. I Kristiansand
          åpner vi dørene til et helt nytt pick-up point i løpet av 2024.
        </h2>
      </div>
      <Butikker />
    </main>
  );
};

export default Page;
