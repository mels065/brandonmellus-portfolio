import React from 'react';
import { Grid, Link } from '@mui/material';

import './style.css'

function Header() {
    return (
        <header id="Header">
            <Grid container>
                <Grid item xs={10}>
                    <div className="logo">
                        <Link href="/" underline="none" color="inherit">BM</Link>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    {/* Replace below with Navigation component */}
                    <div>Navigation</div>
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
