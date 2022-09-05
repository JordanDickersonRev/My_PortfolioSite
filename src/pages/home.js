import About from './about';
import Contact from './contact';
import { Link } from 'react-router-dom';
import {project1} from './project1Files';
import {project2} from './project2Files';
import {project3} from './project3Files';

function Home(){
    return(
        <div>
            <div className='homePage' id='mySection'>
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
                <div id='viewProjects'></div>
                <h2>View Projects</h2>
                <div className='viewProjects'>
                    <Link className='project'
                    to={`/projects/${project1.name}`}
                    state={{ name: project1.name, 
                            summary: project1.summary,
                            process: project1.process,
                            difficulties: project1.difficulties,
                            future: project1.future, 
                            video: project1.video,
                            code: project1.code
                        }}>
                        <div>
                            <h3>{project1.name}</h3>
                            <p>{project1.snippet}</p>
                        </div>
                    </Link>
                    <Link className='project'
                    to={`/projects/${project2.name}`}
                    state={{ name: project2.name, 
                            summary: project2.summary,
                            process: project2.process,
                            difficulties: project2.difficulties,
                            future: project2.future, 
                            video: project2.video,
                            code: project2.code
                        }}>
                        <div>
                            <h3>{project2.name}</h3>
                            <p>{project2.snippet}</p>
                        </div>
                    </Link>
                    <Link className='project'
                    to={`/projects/${project3.name}`}
                    state={{ name: project3.name,
                            summary: project3.summary,
                            process: project3.process,
                            difficulties: project3.difficulties,
                            future: project3.future,
                            video: project3.video,
                            code: project3.code
                        }}>
                        <div>
                            <h3>{project3.name}</h3>
                            <p>{project3.snippet}</p>
                        </div>   
                    </Link>
                </div>
            </div>
            <div id='about'></div>
            <div className='about'><About/></div>
            <div id='contact'></div>
            <div className='contact'><Contact/></div>
        </div>
    )
}
export default Home;