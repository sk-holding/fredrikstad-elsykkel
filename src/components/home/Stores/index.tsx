// import Map from "@/components/shared/Map";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/shared/Map"), { ssr: false });

const Stores = () => {
  return (
    <section className="max-width section">
      <div>
        <h3>E-Wheels Trondheim</h3>
        <h4>Kom innom vår flotte butikk i Søndre gate 20</h4>
      </div>
      <Map />
    </section>
  );
};

export default Stores;
