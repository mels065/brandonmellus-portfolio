import React from 'react';
import { Grid, Link } from '@mui/material';

import Navigation from '../../modules/Navigation';

import './style.css'

function Header() {
    return (
        <header id="Header">
            <Grid container>
                <Grid item xs={9}>
                    <div className="logo">
                        <Link href="/" underline="none" color="inherit">BM</Link>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Navigation />
                </Grid>
            </Grid>
            <div className="hero">
                <div className="hero-content">
                    <h1>Brandon Mellus</h1>
                    <p>Web Development Solutions</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
