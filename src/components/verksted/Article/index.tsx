import ArticleCard from "@/components/shared/ArticleCard";
import styles from "./index.module.scss";

const Article = () => {
  return (
    <section className={styles.wrapper}>
      <ArticleCard
        title="Reparasjon av din elsykkel"
        content="Trenger du reparasjon eller service for din elsykkel i Kristiansand? Våre erfarne teknikere står klare til å hjelpe deg. Med omfattende kompetanse innen elsykler, garanterer vi kvalitetsreparasjoner for alle produkter kjøpt hos oss. Vår tjenestepallett spenner fra enkle oppgaver som utskifting av punkterte dekk til vårklargjøring og full service. Få din elsykkel i topp stand med vår profesjonelle assistanse, tilgjengelig rett her i Kristiansand."
        image="/images/mekaniker.jpg"
        url="https://e-mexx.no/book-service/"
        buttonText="Book service"
      />
    </section>
  );
};

export default Article;
