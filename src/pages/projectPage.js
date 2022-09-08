import { useLocation } from "react-router-dom"
import { useRef} from 'react';

function ProjectPage(){
    const location = useLocation();
    const { name, summary, process, difficulties, future, video, code} = location.state;
    const ref = useRef(null);

    function viewVideo(){ ref.current?.scrollIntoView();}

    return(
        <div className="projectPage">
            <h1>{name}</h1>
            <h3 onClick={()=> viewVideo()}>Skip to Video</h3>
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
            <div ref={ref}>
                <h2>Video</h2>
            </div>
        </div>
    )
}
export default ProjectPage;
