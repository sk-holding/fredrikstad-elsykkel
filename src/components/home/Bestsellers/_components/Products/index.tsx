import { Bike } from "@/types";
import { getBikes } from "@/functions/getData";
import styles from "./index.module.scss";
import ProductCard from "@/components/shared/ProductCard";

const Products = async () => {
  const data = await getBikes();

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
