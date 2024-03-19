import { useState, useEffect } from 'react';
import * as projectsAPI from 'api/projects'

import Project from './components/Project/Project'

function Projects() {
    const [loaded, setLoaded] = useState(false)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        if (!loaded) {
            projectsAPI.getAllProjects()
                .then((projects) => {
                    setLoaded(true);
                    setProjects(projects);
                })
                .catch(() => {
                    setLoaded(true);
                });
        }
    });

    function renderProjects() {
        let entries = projects.map((project : any) => {
            return <Project project={project} />
        });
        return entries
    }

    return (
        <div className="projects">
            {loaded && renderProjects()}
        </div>
    );
}

export default Projects;
