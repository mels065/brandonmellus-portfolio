import React, { useState, useEffect } from 'react';
import { Button, List, ListItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

import NavLink from '../NavLink';

import './style.css';

const navBarStyle = {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end"
}

function Navigation() {
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [menuExtended, setMenuExtended] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 480) {
                setIsMobileScreen(true);
            } else {
                setIsMobileScreen(false);
                setMenuExtended(false);
            }
        }
        handleResize();

        window.addEventListener('resize', handleResize)
    }, []);

    function hamburgerButtonClickHandler() {
        setMenuExtended(!menuExtended);
    }

    return (
        <nav className="navbar">
            <div className={`nav-menu${isMobileScreen && !menuExtended ? ' hidden' : ''}${menuExtended ? ' extended' : ''}`}>
                <List
                    style={!isMobileScreen ? navBarStyle : null}
                >
                    <ListItem>
                        <NavLink>About Me</NavLink>
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
            </div>
            <div className={`navbar-hamburger${!isMobileScreen ? ' hidden' : ''}`}>
                <Button color="inherit" variant="text" onClick={hamburgerButtonClickHandler}>
                    <FontAwesomeIcon icon={faBars} size="3x" />
                </Button>
            </div>
        </nav>
    );
}

export default Navigation;
