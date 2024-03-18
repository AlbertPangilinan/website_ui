import { useState, useEffect } from 'react';
import * as projectsAPI from 'api/projects'

function Projects() {
    const [loaded, setLoaded] = useState(false)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        if (!loaded) {
            projectsAPI.getAllProjects().then((projects) => {
                setLoaded(true);
                setProjects(projects);
            });
        }
    });

    function renderProjects() {
        let entries = projects.map((project : any) => {
            return <div style={{ border: "1px solid black", margin: "16px" }}>{project.topic + ' - ' + project.name}</div>
        });
        return entries
    }

    return (
        <div className="projects">
            {renderProjects()}
        </div>
    );
}

export default Projects;
