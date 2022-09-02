import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import React, {useState, useEffect} from 'react';

function Header(){

    const [toggleMenu, setToggleMenu] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    function toggleNav() {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
        
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
  
    return (
        <nav className="header">
            <HashLink to='/#mySection' className='logo'>
                Jordan
            </HashLink>
            <div className='hamburger' onClick={()=>toggleNav()}>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
            </div>
            {(!toggleMenu || screenWidth > 768) && (
                <div className='headerRight'>
                    <HashLink to='/#viewProjects' className='link'>
                        Projects
                    </HashLink>
                    <HashLink to="/#about" className='link'>
                        About
                    </HashLink>
                    <HashLink to='/#contact' className='link'>
                        Contact
                    </HashLink> 
                </div>
            )}
            
        </nav>
    )
}
export default Header; /*<div className='hamburger' onClick={()=> showMenu()}>
<div className='bar1'></div>
<div className='bar2'></div>
<div className='bar3'></div>
</div>

<div className='headerRight'>*/