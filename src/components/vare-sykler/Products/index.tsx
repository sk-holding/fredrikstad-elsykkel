import { sanityFetch } from "@/functions/getData";
import { Bike } from "@/types";
import ProductCard from "@/components/shared/ProductCard";
import styles from "./index.module.scss";
import { bikeQuery } from "@/lib/queries";

const Products = async () => {
  const query = bikeQuery;
  const data = await sanityFetch(query);

  return (
    <section className={`${styles.wrapper} section`}>
      <div className={styles.inner}>
        {data.map((bike: Bike, idx: number) => {
          return (
            <ProductCard
              key={idx}
              title={bike.title}
              image={bike.image}
              description={bike.description}
              url={bike.url}
            />
          );
        })}
      </div>
      <div className="button_container">
        <a
          href="https://www.e-wheels.no/elsykkel/"
          className="button button_primary"
        >
          Se alle modeller
        </a>
      </div>
    </section>
  );
};

export default Products;
