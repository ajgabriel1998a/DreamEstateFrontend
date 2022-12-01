import React, { Component, useState } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import logo from '../../Images/logo.png'
import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const NavbarMobile = () => {
    const [open, setOpen] = useState(false);

    return (

        <>
            <AppBar position="static" sx={{ background: "white" }} elevation={0}>
                <Toolbar>
                    <Grid container sx={{ placeItems: "center", padding: 2, color: "black", fontWeight: "bold" }}>

                        <Grid item xs={4} sx={{ textAlign: "left" }}>
                            <Typography>
                                <Box>
                                    <Drawer open={open} onClose={() => setOpen(false)}>
                                        <List>
                                            <ListItemButton to='/home' component={Link} onClick={() => setOpen(!open)}>
                                                <ListItemIcon>
                                                    <ListItemText>
                                                        <div style={{padding:'20px', width:'250px',textAlign:'center',color: "black",fontFamily: 'OpenSansHebrewCondensed-Bold'}}>
                                                            Home
                                                        </div>
                                                    </ListItemText>
                                                </ListItemIcon>
                                            </ListItemButton>
                                            <ListItemButton to='/browse' component={Link} onClick={() => setOpen(!open)}>
                                                <ListItemIcon>
                                                    <ListItemText>
                                                        <div style={{padding:'20px', width:'250px',textAlign:'center',color: "black",fontFamily: 'OpenSansHebrewCondensed-Bold'}}>
                                                            Browse
                                                        </div>
                                                    </ListItemText>
                                                </ListItemIcon>
                                            </ListItemButton>
                                            <ListItemButton to='/contactus' component={Link} onClick={() => setOpen(!open)}>
                                                <ListItemIcon>
                                                    <ListItemText>
                                                        <div style={{padding:'20px', width:'250px',textAlign:'center' ,color: "black",fontFamily: 'OpenSansHebrewCondensed-Bold'}}>
                                                            Contact Us
                                                        </div>
                                                    </ListItemText>
                                                </ListItemIcon>
                                            </ListItemButton>
                                            <ListItemButton to='/aboutus' component={Link} onClick={() => setOpen(!open)}>
                                                <ListItemIcon>
                                                    <ListItemText>
                                                        <div style={{padding:'20px', width:'250px',textAlign:'center',color: "black",fontFamily: 'OpenSansHebrewCondensed-Bold'}}>
                                                            About Us
                                                        </div>
                                                    </ListItemText>
                                                </ListItemIcon>
                                            </ListItemButton>
                                            <ListItemButton to='/joinourteam' component={Link} onClick={() => setOpen(!open)}>
                                                <ListItemIcon>
                                                    <ListItemText>
                                                        <div style={{padding:'20px', width:'250px',textAlign:'center',color: "black",fontFamily: 'OpenSansHebrewCondensed-Bold'}}>
                                                           Join Our Team
                                                        </div>
                                                    </ListItemText>
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </List>
                                    </Drawer>
                                    <IconButton onClick={() => setOpen(!open)}>
                                        <MenuIcon />
                                    </IconButton>

                                </Box>
                            </Typography>
                        </Grid>

                        <Grid item xs={4} sx={{ textAlign: "center" }}>
                            <Typography>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 40,
                                    }}
                                    alt="Your logo."
                                    src={logo}
                                /><br />
                                <label style={{
                                        fontFamily: 'OpenSansHebrewCondensed-Bold'
                                    }}>Dream Estate</label>
                            </Typography>
                        </Grid>


                    </Grid>
                </Toolbar>
            </AppBar>
        </>

    )

}
export default NavbarMobile;
