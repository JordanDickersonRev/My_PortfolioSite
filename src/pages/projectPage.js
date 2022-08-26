import { useLocation } from "react-router-dom"
import {HashLink} from 'react-router-hash-link';

function ProjectPage(){
    const location = useLocation();
    const { name, summary, process, difficulties, future, video, code} = location.state;
    
    return(
        <div className="projectPage">
            <h2>{name}</h2>
            <h3>Summary</h3>
            <p>{summary}</p>
            <h3>Process</h3>
            <p>{process}</p>
            <h3>Difficulties</h3>
            <p>{difficulties}</p>
            <h3>Future Plans</h3>
            <p>{future}</p>
            <div id='video'>
                <h3>Video</h3>

            </div>
        </div>
    )

}
export default ProjectPage;