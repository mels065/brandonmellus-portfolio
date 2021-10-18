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

function Navigation({ setCurrentPage }) {
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [menuExtended, setMenuExtended] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 560) {
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

    function linkClickHandler(event) {
        setCurrentPage(event.target.dataset.page);
    }

    return (
        <nav className="navbar">
            <div className={`nav-menu${isMobileScreen && !menuExtended ? ' hidden' : ''}${menuExtended ? ' extended' : ''}`}>
                <List
                    style={!isMobileScreen ? navBarStyle : null}
                >
                    <ListItem>
                        <Button color="inherit" onClick={linkClickHandler} data-page="About Me">About Me</Button>
                    </ListItem>
                    <ListItem>
                        <Button color="inherit" onClick={linkClickHandler} data-page="Portfolio">Portfolio</Button>
                    </ListItem>
                    <ListItem>
                        <Button color="inherit" onClick={linkClickHandler} data-page="Contact">Contact</Button>
                    </ListItem>
                    <ListItem>
                        <Button color="inherit" onClick={linkClickHandler} data-page="Resume">Resume</Button>
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
