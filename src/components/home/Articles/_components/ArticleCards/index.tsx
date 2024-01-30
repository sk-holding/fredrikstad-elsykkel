import { Article } from "@/types";
import { sanityFetch } from "@/functions/getData";
import ArticleCard from "@/components/shared/ArticleCard";
import { articleQuery } from "@/lib/queries";

const ArticleCards = async () => {
  const query = articleQuery;
  const data = await sanityFetch(query);
  return (
    <div>
      {data.map((article: Article, idx: number) => {
        return (
          <ArticleCard
            key={idx}
            title={article.title}
            content={article.content}
            image={article.image}
            url={article.url}
            buttonText={article.buttonText}
            style={idx % 2 === 1 ? { flexDirection: "row-reverse" } : {}}
          />
        );
      })}
    </div>
  );
};

export default ArticleCards;
