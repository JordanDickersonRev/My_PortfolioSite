import { useLocation } from "react-router-dom"
import {HashLink} from 'react-router-hash-link';

function ProjectPage(){
    const location = useLocation();
    const { name, summary, process, difficulties, future, video, code} = location.state;
    
    return(
        <div className="projectPage">
            <h1>{name}</h1>
            <div className="summary">
                <h2>Summary</h2>
                <p>{summary}</p>
            </div>
            <div className="process">
                <h2>Process</h2>
                <p>{process[0]}</p>
                <p>{process[1]}</p>
                <p>{process[2]}</p>
            </div>
            <div className="difficulties">
                <h2>Difficulties</h2>
                <p>{difficulties}</p>
            </div>
            <div className="futurePlans">
                <h2>Future Plans</h2>
                <p>{future}</p>
            </div>
            <div id='video'>
                <h2>Video</h2>
            </div>
        </div>
    )

}
export default ProjectPage; /*<p>{process[0]}</p>
<br/>
<p>{process[1]}</p> */