import { useLocation } from "react-router-dom"

function ProjectPage(){
    const location = useLocation();
    const { name, summary, description, video} = location.state;

    return(
        <div className="projectPage">
            <h2>{name}</h2>
            <p>{summary}</p>
            <p>{description}</p>
            
        </div>
    )

}
export default ProjectPage;