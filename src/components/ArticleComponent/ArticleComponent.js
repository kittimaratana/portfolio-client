import "./ArticleComponent.scss";
import {LinkedIn} from '@mui/icons-material';

function ArticleComponent({date,title,description,link}) {
    return (
        <section className="article__item-container">
            <section className="article__info">
                <p className="article__title">{title}</p>
                <p className="article__date">{date}</p>
            </section>
            <p className="article__text">{description}</p>
            <a href={link} className="article__link-container">
                <LinkedIn className="article__link-image"/>
            </a>
        </section>
    )
    
}

export default ArticleComponent;