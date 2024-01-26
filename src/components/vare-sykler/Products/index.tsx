import { getBikes } from "@/functions/getData";
import { Bike } from "@/types";
import ProductCard from "@/components/shared/ProductCard";
import styles from "./index.module.scss";

const Products = async () => {
  const data = await getBikes();

  return (
    <section className={`${styles.wrapper} max-width section`}>
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
        <a href="#" className="button button_primary">
          Se alle modeller
        </a>
      </div>
    </section>
  );
};

export default Products;
