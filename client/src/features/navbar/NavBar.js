import React, {useState} from 'react';
import Logout from './Logout.js'
import useWindowWidth from '../custom-hooks/useWindowWidth.js'

import { useSelector} from 'react-redux';

import './navbar.css';
import NavLinks from './NavLinks.js';

const NavBar = () => {

    const [hamburger, setHamburger] = useState(false)
    const weatherImage = useSelector((state) => state.weather.current.icon)
    const windowWidth = useWindowWidth()

    const handleMenuOnClick = () => {
        setHamburger(!hamburger)
    }

    return(
        <div className={ windowWidth < 1025 ? "mobile-nav": "mobile-nav-off"}>
            <div className="nav">
                <div className="nav-subcontainer">
                    <div onClick={handleMenuOnClick} className="hamburger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                    <img src={weatherImage}/>
                </div>
                <div className="logout-mobile">
                    <Logout/>
                </div>
               
            </div>
           
            <div className={hamburger? "dropdown-menu" : "hide"}>
                <NavLinks />
            </div>
        </div>
    )
}

export default NavBar;