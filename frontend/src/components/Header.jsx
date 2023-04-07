import { AppBar, Button, Grid, IconButton, TextField, Toolbar } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ open, toggleDrawer, onLogout, serchOnChangeHandler, currentDate }) => {


    return (
        <AppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                    pr: '24px',
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Grid sx={{ flexGrow: 1 }} >
                    <TextField disableFuture={true} id="standard-basic" variant="outlined" type='date' style={{ backgroundColor: 'white', marginLeft: "240px" }} defaultValue={currentDate} onChange={(e) => serchOnChangeHandler(e.target.value)} maxValue={currentDate} />
                </Grid>
                {/* </Typography> */}
                <IconButton color="inherit">
                    <Button color="inherit" onClick={onLogout}>Logout</Button>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header