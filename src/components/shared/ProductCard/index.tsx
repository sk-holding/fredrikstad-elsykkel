import { Bike } from "@/types";
import styles from "./index.module.scss";

const ProductCard: React.FC<Bike> = (props) => {
  return (
    <a href={props.url}>
      <div className={styles.wrapper}>
        <img src={props.image} alt={props.title} />
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    </a>
  );
};

export default ProductCard;
