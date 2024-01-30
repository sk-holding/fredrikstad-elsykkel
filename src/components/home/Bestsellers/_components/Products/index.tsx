import { Bike } from "@/types";
import { sanityFetch } from "@/functions/getData";
import styles from "./index.module.scss";
import ProductCard from "@/components/shared/ProductCard";
import { bikeQuery } from "@/lib/queries";

const Products = async () => {
  const query = bikeQuery;
  const data = await sanityFetch(query);

  return (
    <div className={styles.wrapper}>
      {data.slice(0, 4).map((bike: Bike, idx: number) => {
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
  );
};

export default Products;
