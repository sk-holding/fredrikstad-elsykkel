import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Butikk - Elsykkel Trondheim",
  description:
    "Kom innom vår flotte butikk i Søndre gate 30 for en trivelig elsykkelprat. Våre dyktige medarbeidere står klare til å hjelpe deg.",
};

const Page = () => {
  return (
    <main>
      <div className="title-block">
        <h1>Våre butikker</h1>
        <h2>
          E-Wheels har butikker i hele landet. I Trondheim holder vi til i
          Søndre gate 20. Kom innom for en trivelig elsykkelprat!
        </h2>
      </div>
    </main>
  );
};

export default Page;
