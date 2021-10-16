import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/Home';
console.log(Home);

// import './style.css';

function Content() {
    return (
        <main>
            <Route exact path='/'>
                <Home />
            </Route>
        </main>
    )
}

export default Content;
