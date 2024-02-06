import Stores from "@/components/shared/Stores";
import Article from "@/components/verksted/Article";
import { Metadata } from "next";
import { location } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Verksted - Elsykkel Trondheim",
  description:
    "Våre dyktige mekanikere står klare til å hjelpe deg. Teknikerne våre har lang og god erfaring med elsykler",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Verksted</h1>
        <h2>
          Våre dyktige mekanikere står klare til å hjelpe deg med reperasjon av
          din elsykkel.
        </h2>
      </div>
      <Article />
      <Stores
        title="E-Mexx Trondheim"
        description="Vi har verksted i Jomfrugata 17b"
        location={location.verksted}
      />
    </main>
  );
};

export default Page;
