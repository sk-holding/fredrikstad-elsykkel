import { Article } from "@/types";
import ArticleCard from "@/components/shared/ArticleCard";
import { articles } from "@/lib/articles";

const ArticleCards = async () => {
  return (
    <div>
      {articles.map((article: Article, idx: number) => {
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
