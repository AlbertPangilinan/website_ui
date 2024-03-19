function Project(props : any) {
    return (
        <div style={{ border: "1px solid black", margin: "16px" }}>{props.project.topic + ' - ' + props.project.name}</div>
    );
}

export default Project;
