import React from 'react';
import { Link, List, ListItem } from '@mui/material';

import resume from '../../../misc/BrandonMellus.pdf';

import './style.css';

function Resume() {
    return (
        <div className="resume-page">
            <h2>Resume</h2>
            <p>Download resume <Link target="_blank" href={resume}>here</Link></p>

            <h3>My Skills</h3>
            <List>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>JavaScript (ES6)</ListItem>
                <ListItem>React.js</ListItem>
                <ListItem>Node.js</ListItem>
                <ListItem>Express.js</ListItem>
                <ListItem>MongoDB</ListItem>
                <ListItem>MySQL</ListItem>
            </List>
        </div>
    );
};

export default Resume;
