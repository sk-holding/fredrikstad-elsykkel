import { Metadata } from "next";
import OmOss from "@/components/om-oss/OmOss";

export const metadata: Metadata = {
  title: "Om oss - Drammen Elsykkel",
  description:
    "I 2004 ble Kajakk og Friluft etablert med en visjon om å tilby førsteklasses utstyr til naturinteresserte som elsker å utforske det store utendørs.",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Hvem er vi?</h1>
      </div>
      <OmOss />
    </main>
  );
};
export default Page;
