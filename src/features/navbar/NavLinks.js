import React from 'react';
import {NavLink} from 'react-router-dom';

const NavLinks = () =>{
    return(
        <ul className="navLinks">
            <li><NavLink className="navbar-link" to='/closet'>Closet</NavLink></li>
            <li><NavLink className="navbar-link" to='/closet/add-clothes'>Add Clothes</NavLink></li>
            <li><NavLink className="navbar-link" to='/lookbook'>Lookbook</NavLink></li>
            <li><NavLink className="navbar-link" to='/outfits'>Outfits</NavLink></li>
            <li><NavLink className="navbar-link" to='/outfits/add-outfits' >Add Outfit</NavLink></li>
            <li><NavLink className="navbar-link" to='/weather'>Weather</NavLink></li>
        </ul>
    )
}

export default NavLinks;