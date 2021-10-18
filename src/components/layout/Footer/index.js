import React from 'react';
import { Link, List, ListItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './style.css';

function Footer() {
    return (
        <footer id="Footer">
            <List>
                <ListItem>
                    <Link color="inherit" underline="none" target="_blank" href="https://www.github.com/mels065">
                        <FontAwesomeIcon size="2x" icon={faGithub} /> &nbsp;GitHub
                    </Link>
                </ListItem>
                <ListItem>
                    <Link color="inherit" underline="none" target="_blank" href="https://www.linkedin.com/in/brandonmellus">
                        <FontAwesomeIcon size="2x" icon={faLinkedin} /> &nbsp;LinkedIn
                    </Link>
                </ListItem>
                <ListItem>
                    <Link color="inherit" underline="none" target="_blank" href="mailto:mellusbrandon@gmail.com">
                        <FontAwesomeIcon size="2x" icon={faEnvelope} /> &nbsp;mellusbrandon@gmail.com
                    </Link>
                </ListItem>
                <ListItem>
                    <Link color="inherit" underline="none" target="_blank" href="tel:1-661-489-0845">
                        <FontAwesomeIcon size="2x" icon={faPhoneSquare} /> &nbsp;+1 (661) 489-0845
                    </Link>
                </ListItem>
            </List>
        </footer>
    )
}

export default Footer;
