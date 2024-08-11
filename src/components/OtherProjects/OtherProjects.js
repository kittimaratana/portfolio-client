import "./OtherProjects.scss";
import ProjectComponent from "../../components/ProjectComponent/ProjectComponent";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constant-variables";

function OtherProjects() {
    const [projects, setProjects] = useState([]);
    const [hasError, setHasError] = useState(false);

    // Fetch projects from the server
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(
                    `${BASE_URL}/projects`
                );
                setProjects(response.data);
                setHasError(false);
            } catch {
                setHasError(true);
            }
        };
        fetchProjects();
    }, []);
    if (hasError) {
        return <p>Unable to access projects right now. Please try again later.</p>;
    }

    return (
        <section className="other-projects">
            <div className="other-projects__center-wrap">
                <p className="other-projects__title">Other Projects I've Worked On</p>
                <section className="other-projects__projects-container">
                    {projects.map((project) => {
                        return (
                            <ProjectComponent
                                key={project.id}
                                title={project.project_title}
                                description={project.description}
                                techStack={project.tech_stack}
                                image={project.image}
                            />
                        )
                    })}
                </section>
            </div>
        </section>
    )
}

export default OtherProjects;