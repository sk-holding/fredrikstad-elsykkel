import { Article } from "@/types";
import { getArticles } from "@/functions/getData";
import ArticleCard from "@/components/shared/ArticleCard";

const ArticleCards = async () => {
  const data = await getArticles();
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
