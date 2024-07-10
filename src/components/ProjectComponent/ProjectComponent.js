import "./ProjectComponent.scss";
import {LinkedIn} from '@mui/icons-material';
import {BASE_URL} from "../../utils/constant-variables";

//need to do multer
function ProjectComponent({title,description,techStack,image}) {
    return (
        <section className="article__item-container">
            <img className="video__image" src={`${BASE_URL}/${image}`} />
            <section className="article__info">
                <p className="article__title">{title}</p>
            </section>
            <p className="article__description">{description}</p>
            <p className="article__tech-stack">{techStack}</p>
        </section>
    )
    
}

export default ProjectComponent;
