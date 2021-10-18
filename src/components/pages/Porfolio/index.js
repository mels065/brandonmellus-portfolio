import React, { useState, useEffect } from 'react';
import { List, ListItem } from '@mui/material'

import Project from '../../modules/Project';

import projectData from '../../../data/projects.json';

import './style.css';

const style = {
    projectList: {
        display: "flex",
        flexWrap: "wrap"
    },
    projectListItem: {
        width: "50%"
    }
}

function Portfolio() {
    const [projectWidth, setProjectWidth] = useState('50%');

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 560) {
                setProjectWidth('100%');
            } else {
                setProjectWidth('50%');
            }
        }
        handleResize();

        window.addEventListener('resize', handleResize);
    }, [])

    return (
        <div className="portfolio-page">
            <h2>Portfolio</h2>
            <List className="project-list" style={style.projectList}>
                {
                    projectData.map((project, i) => {
                        return (
                            <ListItem key={i} style={{ ...style.projectListItem, width: projectWidth }}>
                                <Project {...project} />
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    )
}

export default Portfolio;
