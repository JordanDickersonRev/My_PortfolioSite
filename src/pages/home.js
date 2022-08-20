import About from './about';
import Contact from './contact';
import { Link } from 'react-router-dom';

function Home(){

    let project1Name = 'E Commerce WebSite';
    let project1Summary = '';
    let project1Description = '';
    let project1Video = '';

    let project2Name = 'AMD & Intel Web Scraper';
    let project2Summary = '';
    let project2Description = '';
    let project2Video = '';

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
                    <div>
                        <Link className='project'
                        to={`/projects/${project1Name}`}
                        state={{ name: project1Name, 
                                summary: project1Summary,
                                description: project1Description, 
                                video: project1Video
                            }}>
                            <h3>{project1Name}</h3>
                            <p>{project1Summary}</p>
                        </Link>
                    </div>
                    <div>
                        <Link className='project'
                        to={`/projects/${project2Name}`}
                        state={{ name: project2Name, 
                                summary: project2Summary,
                                description: project2Description, 
                                video: project2Video
                            }}>
                            <h3>{project2Name}</h3>
                            <p>{project2Summary}</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div id='about'><About/></div>
            <div id='contact'><Contact/></div>
        </div>
    )
}
export default Home;