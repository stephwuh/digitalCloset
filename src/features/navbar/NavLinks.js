import React from 'react';
import {NavLink} from 'react-router-dom';

const NavLinks = () =>{
    return(
        <ul className="navLinks">
            <li><NavLink className="navbar-link" activeClassName='current' to='/closet'>Closet</NavLink></li>
            <li><NavLink className="navbar-link" activeClassName='current' to='/add-clothes'>Add Clothes</NavLink></li>
            <li><NavLink className="navbar-link" activeClassName='current' to='/lookbook'>Lookbook</NavLink></li>
            <li><NavLink className="navbar-link" activeClassName='current' to='/outfits'>Outfits</NavLink></li>
            <li><NavLink className="navbar-link" activeClassName='current' to='/add-outfits' >Add Outfit</NavLink></li>
            <li><NavLink className="navbar-link" activeClassName='current' to='/weather'>Weather</NavLink></li>
        </ul>
    )
}

export default NavLinks;