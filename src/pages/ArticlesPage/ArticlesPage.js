import "./ArticlesPage.scss";
import ArticleComponent from "../../components/ArticleComponent/ArticleComponent"
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constant-variables";

function ArticlesPage() {
    const [articles, setArticles] = useState([]);
    const [hasError, setHasError] = useState(false);

    // Fetch articles from the server
    useEffect(() => {
        const fetchArticles = async () => {
        try {
            const response = await axios.get(
            `${BASE_URL}/articles`
            );
            setArticles(response.data);
            setHasError(false);
        } catch {
            setHasError(true);
        }
        };
        fetchArticles();
    }, []);
    if (hasError) {
        return <p>Unable to access articles right now. Please try again later.</p>;
    }
//    console.log(articles)

    return (
        <main class="article">
            <section class="article__center-wrap">
            <p class="article__title">Cool Articles I Recommend Reading</p>
                    <section class="article__container">
                    {articles.map((article) => {
                        return (
                            <ArticleComponent
                                key={article.id}
                                date={article.date}
                                title={article.article_title}
                                description={article.description}
                                link={article.link}
                                image={article.image}
                            />
                        )
                    })}
                </section>
            </section>
        </main>
    )
}

export default ArticlesPage;

