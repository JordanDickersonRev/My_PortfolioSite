import About from './about';
import Contact from './contact';
function Home(){
    return(
        <div>
            <div className='homePage'>
                <h1>Heading</h1>
                <div className='mySection'>
                    <h2>Hi! I'm Jordan</h2>
                    <img src={require('../images/1.jpg')} alt={'Profile Pic'}/>
                    <p>.........................</p>
                </div>
                <div className='skills'>
                    <h2>Tech Stack and Skills</h2>
                    <p>..........................</p>
                </div>
                <h2>View Projects</h2>
                <div className='viewProjects'>
                    
                </div>
            </div>
            <div id='about'><About/></div>
            <div id='contact'><Contact/></div>
        </div>
    )
}
export default Home;