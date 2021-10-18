import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/Home';
import AboutMe from '../../pages/AboutMe';
import Portfolio from '../../pages/Porfolio';
import Contact from '../../pages/Contact';

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
            <Route exact path="/portfolio">
                <Portfolio />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
        </main>
    )
}

export default Content;
