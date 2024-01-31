import { Metadata } from "next";
import OmOss from "@/components/om-oss/OmOss";

export const metadata: Metadata = {
  title: "Om oss - Elsykkel Trondheim",
  description:
    "Vi er Norges ledende leverandør av små elektriske kjøretøy. E-wheels har merker som Momas, Fosna og Avelo.",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Hvem er vi?</h1>
        <h2>
          Vi er norges største leverandør av små elektriske kjøretøy. Du finner
          oss i Søndre gate 20 i Midtbyen
        </h2>
      </div>
      <OmOss />
    </main>
  );
};
export default Page;
