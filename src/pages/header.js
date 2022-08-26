import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

function Header(){
    let x = document.getElementById("headerLinks");

    function showMenu(){
        x.style.display === "block" ? x.style.display = "none" : x.style.display = "block";
    }

    return (
        <nav className="header">
            <HashLink to='/#mySection' className='link'>
                Jordan
            </HashLink>
            <HashLink to='/#viewProjects' className='link'>
                Projects
            </HashLink>
            <HashLink to="/#about" className='link'>
                About
            </HashLink>
            <HashLink to='/#contact' className='link'>
                Contact
            </HashLink>
        </nav>
    )
}
export default Header; 