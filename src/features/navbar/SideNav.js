import React from 'react';
import NavLinks from './NavLinks.js';
import useWindowWidth from '../custom-hooks/useWindowWidth.js';

import { useSelector} from 'react-redux';

import Logout from './Logout.js';




const SideNav = () => {
    const weatherImage = useSelector((state) => state.weather.current.icon)
    const windowWidth = useWindowWidth()

    
    return(
        <div className={windowWidth >= 1025? "side-nav": "side-nav-off"}>
            <div className="navLink-sideNav">
                <NavLinks/>
                <img src={weatherImage}/>
            </div>
            
            <div className="logout-side">
                <Logout/>
            </div>
            
        </div>
    )
}

export default SideNav;