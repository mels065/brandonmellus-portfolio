import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/Home';
import AboutMe from '../../pages/AboutMe';

// import './style.css';

function Content() {
    return (
        <main>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/about-me'>
                <AboutMe />
            </Route>
        </main>
    )
}

export default Content;
