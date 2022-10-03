import React from 'react'
import "./Navbar.css"
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { Box, Drawer, makeStyles, Grid } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme)=>({
    navBarIcon:{
        color:"#000",
        fontSize:"2.8rem",
        transition: "500ms",
        cursor: "pointer",
        '&:hover':{
            transform: "rotate(90deg)",
            scale: "0.9",
            color: "rgba(117, 116, 116, 0.613)"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"2rem",
        },
    },
    navBarDrawerIcon:{
        fontSize:"3rem",
        position: "absolute",
        color:"#fff",
        top:"2%",
        right:"3%",
        transition: "200ms",
        cursor: "pointer",
        '&:hover':{
            transform: "rotate(45deg)",
            scale: "0.9",
            color: "rgba(117, 116, 116, 0.95)",
        },
    }
}))

function Navbar() {
const classes = useStyles();
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

const [color, setColor] = useState(false)
const changeColor = () => {
    if (window.scrollY >= 90) {
        setColor(true)
    }else{
        setColor(false)
    }
}
    window.addEventListener("scroll",changeColor)
  return (
    <>
        <div className={color ? 'navbar navBarBg' : 'navbar'}>
            <Grid justifyContent='space-evenly' className='navBarContainer'>
                <Grid item xs={11}>
                    <Grid container justifyContent='space-evenly' className='navBarContainer'>
                        <Grid item className={color ? 'navBarLogo navBarLogoBg' : 'navBarLogo'} xs={7} sm={8} md={9}>
                            <div>
                                <h2>KINGs NFTs club</h2>
                            </div>
                        </Grid>
                        <Grid item className='navBarList' xs={5} sm={4} md={3}>
                            <div>
                                <ul>
                                    <li>
                                        <a href=''><img src='./Assets/instgram.png' alt=''/></a>
                                    </li>
                                    <li>
                                        <a href=''><img src='./Assets/twitter.png' alt=''/></a>
                                    </li>
                                    <li>
                                        <a href=''><img src='./Assets/discord.png' alt=''/></a>
                                    </li>
                                    <div>
                                      <MenuIcon className={classes.navBarIcon} onClick={() => setIsDrawerOpen(true)}/>
                                    </div>
                                    <div className='navBarDrawer'>
                                        <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                                            <Box className="navBarDrawer" onClick={() => setIsDrawerOpen(false)}>
                                                
                                                <ul>
                                                        <ClearIcon className={classes.navBarDrawerIcon}/>
                                                    <li>
                                                        <a href='#home'>Home</a>
                                                    </li>
                                                    <li>
                                                        <a href='#about'>About</a>
                                                    </li>
                                                    
                                                    <li>
                                                        <a href='#roadmap'>Roadmap</a>
                                                    </li>
                                                    <li>
                                                        <a href='#faqs'>FAQs</a>
                                                    </li>
                                                    <li>
                                                        <a href='#team'>Our Team</a>
                                                    </li>
                                                </ul>
                                            </Box>
                                        </Drawer>
                                    </div>
                                </ul>
                            </div>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>                     
    </>
  )
}

export default Navbar