import React from 'react';
import { Route } from 'react-router-dom';
import { Grid, Link } from '@mui/material';

import Navigation from '../../modules/Navigation';

import './style.css'

function Header() {
    return (
        <header id="Header">
            <Grid container>
                <Grid item xs={7}>
                    <div className="logo">
                        <Link href="/" underline="none" color="inherit">BM</Link>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <Navigation />
                </Grid>
            </Grid>
            <Route exact path="/">
                <div className="hero">
                    <div className="hero-content">
                        <h1>Brandon Mellus</h1>
                        <p>Web Development Solutions</p>
                    </div>
                </div>
            </Route>
        </header>
    );
}

export default Header;
