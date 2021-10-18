import React from 'react';
import { Button } from '@mui/material';

import Home from '../../pages/Home';
import AboutMe from '../../pages/AboutMe';
import Portfolio from '../../pages/Porfolio';
import Contact from '../../pages/Contact';
import Resume from '../../pages/Resume';

// import './style.css';

function Content({ currentPage }) {
    return (
        <main>
            {
                (() => {
                    switch (currentPage) {
                        case 'Home': {
                            return <Home />
                        }
                        case 'About Me': {
                            return <AboutMe />
                        }
                        case 'Portfolio': {
                            return <Portfolio />
                        }
                        case 'Contact': {
                            return <Contact />
                        }
                        case 'Resume': {
                            return <Resume />
                        }
                    }
                })()
            }
        </main>
    )
}

export default Content;
