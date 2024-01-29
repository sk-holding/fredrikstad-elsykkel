import ArticleCard from "@/components/shared/ArticleCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verksted - Elsykkel Trondheim",
  description:
    "Våre dyktige mekanikere står klare til å hjelpe deg. Teknikerne våre har lang og god erfaring med elsykler",
};

const Page = () => {
  return (
    <main>
      <div className="title-block">
        <h1>Verksted</h1>
        <h2>
          Våre dyktige mekanikere står klare til å hjelpe deg med reperasjon av
          din elsykkel.
        </h2>
        <section className="max-width">
          <ArticleCard
            title="Reparasjon av din elsykkel"
            content="Skulle det oppstå behov for reparasjon eller service av din
              elsykkel så kan vi hjelpe deg. Våre teknikere har lang og god
              erfaring med nettopp elsykler. Vi tilbyr selvsagt reparasjon av
              alle produkter kjøpt hos oss. Vi gjør alt fra å skifte punkterte
              dekk, til vårklargjøring, og full service."
            image="/images/mekaniker.jpg"
            url="https://e-mexx.no/book-service/"
            buttonText="Book service"
          />
        </section>
      </div>
    </main>
  );
};

export default Page;
