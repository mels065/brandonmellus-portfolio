import React from 'react';
import { Link } from '@mui/material';

import './style.css';

function NavLink({ href, children }) {
    return (
        <Link
            color="inherit"
            underline="hover"
            href={href ? href : `/${children.toLowerCase()}`}
        >
            {children}
        </Link>
    )
}

export default NavLink;
