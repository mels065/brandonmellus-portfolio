import React from 'react';
import { List, ListItem, Link } from '@mui/material';

import NavLink from '../NavLink';

import './style.css';

const navBarStyle = {
    display: "flex",
    justifyContent: "flex-end"
}

function Navigation() {
    return (
        <navbar className="navbar">
            <List className="nav-menu" style={navBarStyle}>
                <ListItem>
                    <NavLink href="/">About Me</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink>Portfolio</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink>Contact</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink>Resume</NavLink>
                </ListItem>
            </List>
        </navbar>
    );
}

export default Navigation;
