import React from 'react';
import { Link } from '@mui/material';

import './style.css';

function NavLink({ children }) {
    const linkStyle = {
        fontSize: "1.5rem"
    }
    return (
        <Link
            color="inherit"
            underline="hover"
            href={`/${children.toLowerCase().split(' ').join('-')}`}
            style={linkStyle}
        >
            {children}
        </Link>
    )
}

export default NavLink;
