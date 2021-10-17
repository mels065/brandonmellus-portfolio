import React from 'react';
import { Link } from '@mui/material';

import './style.css';

const linkStyle = {
    fontWeight: "bold",
    fontSize: "1.25rem"
}

function Project({ title, screenshot, repo, demo }) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={require(`../../../images/projects/${screenshot}`).default} />            
            <Link color="primary" underline="none" href={repo} style={linkStyle}>Repo</Link>
            <br />
            <Link color="primary" underline="none" href={demo} style={linkStyle}>Demo</Link>
        </div>
    )
}

export default Project;
