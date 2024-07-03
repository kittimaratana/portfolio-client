import "./KonnectPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constant-variables";

function KonnectPage() {
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
    });
    if (hasError) {
        return <p>Unable to access projects right now. Please try again later.</p>;
    }
    console.log(projects)

    return (
        <main>
            <p>KonnectPage</p>
        </main>
    )
}

export default KonnectPage;