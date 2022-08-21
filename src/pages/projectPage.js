import { useLocation } from "react-router-dom"
import {HashLink} from 'react-router-hash-link';

function ProjectPage(){
    const location = useLocation();
    const { name, summary, description, difficulties, foresight, video, code} = location.state;

    return(
        <div className="projectPage">
            <h2>{name}</h2>
            <h3>Summary</h3>
            <p>{summary}</p>
            <h3>Description</h3>
            <p>{description}</p>
            <h3>Difficulties</h3>
            <p>{difficulties}</p>
            <h3>Foresight</h3>
            <p>{foresight}</p>
            <div id='video'>
                <h3>Video</h3>

            </div>
        </div>
    )

}
export default ProjectPage;