import { Metadata } from "next";
import OmOss from "@/components/om-oss/OmOss";

export const metadata: Metadata = {
  title: "Om oss - Elsykkel Kristiansand",
  description:
    "Kajakk og Fritid ble grunnlagt i 2004 med en visjon om å tilby høykvalitets utstyr til de som elsker å utforske naturen gjennom utendørsaktiviteter.",
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
