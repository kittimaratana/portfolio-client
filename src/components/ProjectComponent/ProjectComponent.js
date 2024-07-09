import "./ProjectComponent.scss";
import {LinkedIn} from '@mui/icons-material';

//need to do multer
function ProjectComponent({title,description,techStack,image}) {
    return (
        <section className="article__item-container">
            <section className="article__info">
                <p className="article__title">{title}</p>
            </section>
            <p className="article__description">{description}</p>
            <p className="article__tech-stack">{techStack}</p>
        </section>
    )
    
}

export default ProjectComponent;
