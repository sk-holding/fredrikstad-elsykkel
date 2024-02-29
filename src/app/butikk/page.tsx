import { Metadata } from "next";
import Butikker from "@/components/butikk/Butikker";

export const metadata: Metadata = {
  title: "Butikk - Fredrikstad Elsykkel",
  description:
    "I vår nyåpnede butikk i Fredrikstad finner du et bredt sortement, med en elsykkel for en hver ",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Våre butikker</h1>
        <h2>
          Vår flotte nye butikk i Østfoldhallene åpnet dørene i 2024. I
          flunkende nye lokaler står vi nå klare til å ta imot deg for en
          trivelig elsykkelprat.
        </h2>
      </div>
      <Butikker />
    </main>
  );
};

export default Page;
