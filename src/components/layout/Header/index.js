import React from 'react';
import { Button, Grid } from '@mui/material';

import Navigation from '../../modules/Navigation';

import './style.css';

const logoButtonStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    width: "60px"
}

function Header({ setCurrentPage }) {
    function linkClickHandler(event) {
        setCurrentPage(event.target.dataset.page);
    }

    return (
        <header id="Header">
            <Grid container>
                <Grid item xs={7}>
                    <div className="logo">
                        <Button color="inherit" style={logoButtonStyle} onClick={linkClickHandler} data-page="Home">BM</Button>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <Navigation setCurrentPage={setCurrentPage} />
                </Grid>
            </Grid>
        </header>
    );
}

export default Header;
