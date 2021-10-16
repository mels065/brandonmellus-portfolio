import React from 'react';
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
        </header>
    );
}

export default Header;
