import About from './about';
import Contact from './contact';
import { Link } from 'react-router-dom';
import {project1} from './project1Files';
import {project2} from './project2Files';
import {project3} from './project3Files';

function Home(){
    return(
        <div>
            <div className='homePage'>
                <h1>Heading</h1>
                <div className='mySection'>
                    <div className='profile'>
                        <h2>Hi! I'm Jordan</h2>
                        <p>.....</p>
                    </div>
                    <div className='profileImage'>
                        <img src={require('../images/1.png')} alt={'Profile Pic'}/>
                    </div>
                </div>
                <div className='skills'>
                    <h2>Tech Stack and Skills</h2>
                    <p>..........................</p>
                </div>
                <h2>View Projects</h2>
                <div id='viewProjects'>
                    <Link className='project'
                    to={`/projects/${project1.name}`}
                    state={{ name: project1.name, 
                            summary: project1.summary,
                            description: project1.description,
                            difficulties: project1.difficulties,
                            foresight: project1.foresight, 
                            video: project1.video,
                            code: project1.code
                        }}>
                        <div>
                            <h3>{project1.name}</h3>
                            <p>{project1.summary}</p>
                        </div>
                    </Link>
                    <Link className='project'
                    to={`/projects/${project2.name}`}
                    state={{ name: project2.name, 
                            summary: project2.summary,
                            description: project2.description,
                            difficulties: project2.difficulties,
                            foresight: project2.foresight, 
                            video: project2.video,
                            code: project2.code
                        }}>
                        <div>
                            <h3>{project2.name}</h3>
                            <p>{project2.summary}</p>
                        </div>
                    </Link>
                    <Link className='project'
                    to={`/projects/${project3.name}`}
                    state={{ name: project3.name, 
                            summary: project3.summary,
                            description: project3.description,
                            difficulties: project3.difficulties,
                            foresight: project3.foresight, 
                            video: project3.video,
                            code: project3.code
                        }}>
                        <div>
                            <h3>{project3.name}</h3>
                            <p>{project3.summary}</p>
                        </div>   
                    </Link>
                </div>
            </div>
            <div id='about'><About/></div>
            <div id='contact'><Contact/></div>
        </div>
    )
}
export default Home;