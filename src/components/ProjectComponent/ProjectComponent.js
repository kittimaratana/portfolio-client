import "./ProjectComponent.scss";
import {BASE_URL} from "../../utils/constant-variables";

//need to do multer
function ProjectComponent({title,description,techStack,image}) {

    const renderTechStack = (techStack) => {
        return techStack.split(", ").map((tech, index) => (
            <p className="project-component__tech-item">{tech}</p>
        ));
    };

    return (
        <section className="project-component">
            <section className="project-component__image-container">
                <img className="project-component__image" alt={title} src={`${BASE_URL}/${image}`} />
                <div className="project-component__image-overlay"></div>
                <p className="project-component__title">{title}</p>
            </section>
            <div className="project-component__tech-container">
                {renderTechStack(techStack)}
            </div>
        </section>
    )
    
}

export default ProjectComponent;
