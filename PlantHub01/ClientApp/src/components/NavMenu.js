import { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Avatar from '@mui/material/Avatar';
import profileImage from "../assets/BellaProfile.png";


export const NavMenu = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
        // This toggles the collapsed state
        setCollapsed(currentState => !currentState)
    }

    return (
        <header className="navBar">
        <Navbar className="navbar-expand-sm navbar-toggleable-sm box-shadow mb-3" container light>
                <NavbarBrand tag={Link} to="/">Welcome to PlantHub!</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/how-it-works">How it works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/profile"><Avatar alt="Bella" src={profileImage} to="/profile"> </Avatar>     </NavLink>    
               </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
}
