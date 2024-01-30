import { storeQuery } from "@/lib/queries";
import ButikkCard from "./_components/ButikkCard";
import { sanityFetch } from "@/functions/getData";
import { Store } from "@/types";
import styles from "./index.module.scss";

const Butikker = async () => {
  const query = storeQuery;
  const data = await sanityFetch(query);
  return (
    <section className={`${styles.wrapper} max-width`}>
      <div className={styles.inner}>
        {data.map((store: Store, idx: number) => {
          return (
            <ButikkCard
              key={idx}
              storeName={store.storeName}
              storeAddress={store.storeAddress}
              image={store.image}
              url={store.url}
            />
          );
        })}
      </div>
      <div>
        <a
          className="button button_primary"
          href="https://www.e-wheels.no/butikker/"
        >
          Se alle butikker
        </a>
      </div>
    </section>
  );
};

export default Butikker;
