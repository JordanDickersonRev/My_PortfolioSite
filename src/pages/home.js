import About from './about';
import Contact from './contact';

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
                    
                </div>
            </div>
            <div id='about'><About/></div>
            <div id='contact'><Contact/></div>
        </div>
    )
}
export default Home;