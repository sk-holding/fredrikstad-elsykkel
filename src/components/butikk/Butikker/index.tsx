import { storeQuery } from "@/lib/queries";
import { sanityFetch } from "@/functions/getData";
import { Store } from "@/types";
import styles from "./index.module.scss";
import ProductCard from "@/components/shared/ProductCard";

const Butikker = async () => {
  const query = storeQuery;
  const data = await sanityFetch(query);
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {data.map((store: Store, idx: number) => {
          return (
            <ProductCard
              key={idx}
              title={store.storeName}
              image={store.image}
              description={store.storeAddress}
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
