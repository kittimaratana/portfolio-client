import "./ArticleComponent.scss";
import { ExitToApp } from '@mui/icons-material';
import { BASE_URL } from "../../utils/constant-variables";
import { useState } from "react";

function ArticleComponent({ date, title, description, link, image }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a href={link} className="article-component" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img className="article-component__image" src={`${BASE_URL}/${image}`} />
            <div className={`article-component__image-overlay ${isHovered ? 'article-component__image-overlay--hover' : ""}`}></div>
            {!isHovered && (
                <section className="article-component__detail-container">
                    <p className="article-component__detail">{title}</p>
                </section>
            )}
            {isHovered && (
                <section className="article-component__detail-container">
                    <p className="article-component__description">Description: {description}</p>
                    <section className="article-component__link">
                        <ExitToApp className="article-component__link-image" />
                    </section>
                </section>
            )}
        </a>
    )

}

//<p className="article-component__description">Description: {description}</p>
//            <a href={link} className="article-component__link-container">
//<LinkedIn className="article-component__link-image"/>
//</a>

export default ArticleComponent;