import About from '../about/about';
import Contact from '../contact/contact';
import { Link } from 'react-router-dom';
import {project1} from '../project1/project1files';
import {project2} from '../project2/project2files';
import {project3} from '../project3/project3files';
import './home.css';

function Home(){

   /* const skills = `These are the languages, tools, and technologies I use to bring products to life.
        This list only reflects the skills I use the most. View my resume in the about section 
        to see more of my skills. I can learn any language, tools, or technology, I do not have 
        preferences.`;

        <p>{skills}</p>*/
  
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
                        <p>My goal is to become a web developer where I can deliver business value while also leveling up my skills as a developer.</p>
                    </div>
                </div>
                <div className='skills'>
                    <div className='skillsSection1'>
                        <h2>Skills</h2> 
                    </div>
                    <div className='skillsSection2'>
                        <div>
                            <h3>Back-End Technology</h3>
                            <ul>
                                <li>C#</li>
                                <li>ASP.NET</li>
                                <li>ADO.NET</li>
                                <li>.NET</li>
                                <li>SQL Database</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Front-End Technology</h3>
                            <ul>
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Software Developer Skills</h3>
                            <ul>
                                <li>Git</li>
                                <li>SDLC</li>
                                <li>Microsoft Azure</li>
                                <li>MySQL Workbench</li>
                                <li>Unix/Linux Commands</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Other Programming Languages</h3>
                            <ul>
                                <li>Java</li>
                                <li>Python</li>
                                <li>C++</li>
                                <li>C</li>
                                <li>Unix/Linux Shell Scripting</li>
                            </ul>
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