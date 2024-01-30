import { Store } from "@/types";
import styles from "./index.module.scss";

const ButikkCard: React.FC<Store> = (props) => {
  return (
    <a href={props.url} className={`${styles.wrapper}`}>
      <img src={props.image} alt={props.storeName} />
      <p>{props.storeName}</p>
      <p>{props.storeAddress}</p>
    </a>
  );
};

export default ButikkCard;
