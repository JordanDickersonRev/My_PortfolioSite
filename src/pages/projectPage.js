import { useLocation } from "react-router-dom"
import { useRef} from 'react';
import ScrollToTop from './scrollToTop';

function ProjectPage(){
    const location = useLocation();
    const { name, summary, responsibilities, technologies, video, code} = location.state;
    const ref = useRef(null);

    function viewVideo(){ ref.current?.scrollIntoView();}

    return(
        <div className="projectPage">
            <ScrollToTop/>
            <h1>{name}</h1>
            <button onClick={()=> viewVideo()}>Skip to Video</button>
            <div className="summary">
                <h2>Summary</h2>
                <p>{summary}</p>
            </div>
            <div className="responsibilities">
                <h2>Roles / Responsibilities</h2>
                <p>{responsibilities[0]}</p>
                <ul>
                    <li>{responsibilities[1]}</li>
                    <li>{responsibilities[2]}</li>
                    <li>{responsibilities[3]}</li>
                    <li>{responsibilities[4]}</li>
                    <li>{responsibilities[5]}</li>
                    <li>{responsibilities[6]}</li>
                    <li>{responsibilities[7]}</li>
                </ul>
            </div>
            <div className="technologies">
                <h2>Environment / Technologies</h2>
                <p>{technologies}</p>
            </div>
            <div ref={ref}>
                <h2>Video</h2>
                <video controls
                    //src={require(`/videos/${video}.mp4`)}
                    type="video/mp4">
                        Your browser does not support this video.
                </video>
                <a href={code}><button>Source Code</button></a>
            </div>
        </div>
    )
}
export default ProjectPage;
