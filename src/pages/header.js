import { Link } from 'react-router-dom'; 

function Header(){
    return (
        <nav className="header">
            <Link to='/home' className='link'>
                Project
            </Link>
            <Link to="/home" className='link'>
                About
            </Link>
            <Link to='/home' className='link'>
                Contact
            </Link>
        </nav>
    )
}
export default Header; 