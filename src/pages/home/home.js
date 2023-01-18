import About from '../about/about';
import Contact from '../contact/contact';
import { Link } from 'react-router-dom';
import {project1} from '../project1/project1files';
import {project2} from '../project2/project2files';
import {project3} from '../project3/project3files';
import './home.css';

function Home(){  
    return(
        <div>
            <div className='homePage' id='mySection'>
                <h1>Full-Stack Software Developer</h1>
                <div className='mySection'>
                    <div className='profileImage'>
                        <img src={require('../../images/1.jpg')} alt={'Profile Pic'}/>
                    </div>
                    <div className='profile'>
                        <h2>Hi, I'm Jordan</h2>
                        <p>My goal is to become a Software Developer where I can deliver business value while also leveling up my skills as a developer.</p>
                    </div>
                </div>
                <div className='skills'>
                    <div className='skillsSection1'>
                        <h2>Skills</h2> 
                    </div>
                    <div className='skillsSection2'>
                        <div>
                            <h3>Back-End Technologies</h3>
                            <p>C# | ASP.NET | ADO.NET | .NET | SQL Database</p>
                        </div>
                        <div>
                            <h3>Front-End Technologies</h3>
                            <p>React | HTML | CSS | JavaScript</p>
                        </div>
                        <div>
                            <h3>Software Developer Skills</h3>
                            <p>Git | SDLC | Microsoft Azure | MySQL Workbench | Unix/Linux Commands</p>
                        </div>
                        <div>
                            <h3>Other Programming Languages</h3>
                            <p>Java | Python | C++ | C | Unix/Linux Shell Scripting</p>
                        </div>
                    </div>
                    <div id='viewProjects'></div>
                </div>
                <h2>View Projects</h2>
                <div className='viewProjects'>
                    <Link className='project'
                        to={`/projects/${project1.name}`}
                        state={{ name: project1.name, 
                            summary: project1.summary,
                            responsibilities: project1.responsibilities,
                            technologies: project1.technologies,
                            video: project1.video,
                            code: project1.code
                        }}>
                        <div>
                            <h3>{project1.name}</h3>
                            <img src={require('../../images/ersapi.png')} alt={'REST API'}/>
                        </div>
                    </Link>
                    <Link className='project'
                        to={`/projects/${project2.name}`}
                        state={{ name: project2.name, 
                            summary: project2.summary,
                            responsibilities: project2.responsibilities,
                            technologies: project2.technologies,
                            video: project2.video,
                            code: project2.code
                        }}>
                        <div>
                            <h3>{project2.name}</h3>
                            <img src={require('../../images/skatehouse.png')} alt={'SkateHouse E-Commerce Website'}/>
                        </div>
                    </Link>
                    <Link className='project'
                        to={`/projects/${project3.name}`}
                        state={{ name: project3.name, 
                            summary: project3.summary,
                            responsibilities: project3.responsibilities,
                            technologies: project3.technologies,
                            video: project3.video,
                            code: project3.code
                        }}>
                        <div>
                            <h3>{project3.name}</h3>
                        </div>   
                    </Link>
                </div>
                <div id='about'></div>
            </div>
            <About/>
            <div id='contact'></div>
            <Contact/>
        </div>
    )
}
export default Home;