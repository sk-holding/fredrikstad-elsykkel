import ArticleCard from "@/components/shared/ArticleCard";
import styles from "./index.module.scss";

const Article = () => {
  return (
    <section className={styles.wrapper}>
      <ArticleCard
        title="Reparasjon av din elsykkel"
        content="Skulle det oppstå behov for reparasjon eller service av din
          elsykkel så kan vi hjelpe deg. Våre teknikere har lang og god
          erfaring med nettopp elsykler. Vi tilbyr selvsagt reparasjon av
          alle produkter kjøpt hos oss. Vi gjør alt fra å skifte punkterte
          dekk, til vårklargjøring, og full service."
        image="/images/mekaniker.jpg"
        url="https://e-mexx.no/book-service/"
        buttonText="Book service"
      />
    </section>
  );
};

export default Article;
