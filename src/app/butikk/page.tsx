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
          E-Wheels har butikker i hele landet. I Trondheim holder vi til i
          Søndre gate 20. Kom innom for en trivelig elsykkelprat!
        </h2>
      </div>
      <Butikker />
      <Stores
        title="E-Wheels Trondheim"
        description="Kom innom våre flotte butikk i Søndre gate 20"
        location={location.butikk}
      />
    </main>
  );
};

export default Page;
