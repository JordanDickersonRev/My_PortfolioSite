import {HashLink} from 'react-router-hash-link';

function Header(){
    return (
        <nav className="header">
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