import {HashLink} from 'react-router-hash-link';
import React, {useState, useEffect} from 'react';

function Header(){

    const [toggleMenu, setToggleMenu] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const closeMenu = (e) => {
        if(e.target.className !== "hamburger" &&
            e.target.className !== "bar"){
            setToggleMenu(true);
        }
    }

    function changeWidth(){setScreenWidth(window.innerWidth);}

    useEffect(() => {
        window.addEventListener('resize', changeWidth);
        document.body.addEventListener('click', closeMenu);

        // recommended, if the component gets destroyed,  it'll remove the event listeners from the memory
        return () => {
            window.removeEventListener('resize', changeWidth);
            document.body.removeEventListener('click', closeMenu);
        }
    }, [])
  
    return (
        <nav className="header">
            <button className='hamburger' onClick={()=> setToggleMenu(toggleMenu => !toggleMenu)}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </button>
            <HashLink to='/#mySection' className='logo'>
                Jordan
            </HashLink>
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
export default Header;