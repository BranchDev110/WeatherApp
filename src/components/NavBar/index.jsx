import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const NavBar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    BRANCH
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;