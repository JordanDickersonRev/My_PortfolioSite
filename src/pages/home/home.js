import About from '../about/about';
import Contact from '../contact/contact';
import { Link } from 'react-router-dom';
import {project1} from '../project1/project1files';
import {project2} from '../project2/project2files';
import {project3} from '../project3/project3files';
import './home.css';

function Home(){

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if(localStorage.getItem("theme") === null)
    {
        localStorage.setItem("theme", defaultDark);
    }

    const theme = localStorage.getItem("theme");

    function switchTheme()
    {
        const newTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
    }

    const skills = `These are the languages, tools, and technologies I use to bring products to life.
        This list only reflects the skills I use the most. View my resume in the about section 
        to see more of my skills. I can learn any language, tools, or technology, I do not have 
        preferences.`;

    return(
        <div>
            <div className='homePage' id='mySection' data-theme={theme}>
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
                        <h2>My Skills</h2>
                        <p>{skills}</p>
                    </div>
                    
                    <div className='skillsSection2'>
                        <div>

                        <input onClick={switchTheme} type="checkbox" />

                            <img src={require('../../images/html.png')} alt={'Html Logo'}/>
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src={require('../../images/css.png')} alt={'CSS Logo'}/>
                            <p>CSS</p>
                        </div>
                        <div>
                            <img src={require('../../images/javascript.png')} alt={'Javascript Logo'}/>
                            <p>Javascript</p>
                        </div>
                        <div>
                            <img src={require('../../images/react.png')} alt={'React Logo'}/>
                            <p>React</p>
                        </div>
                        <div>
                            <img src={require('../../images/node.png')} alt={'Node Logo'}/>
                            <p>Node.js</p>
                        </div>
                        <div>
                            <img src={require('../../images/mysql.png')} alt={'MySql Logo'}/>
                            <p>MySql</p>
                        </div>
                        <div>
                            <img src={require('../../images/github.png')} alt={'Github Logo'}/>
                            <p>Github</p>
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
            <div className='about'><About/></div>
            <div id='contact'></div>
            <div className='contact'><Contact/></div>
        </div>
    )
}
export default Home;