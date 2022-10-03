import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import "./Team.css"
function Team() {
const useStyles = makeStyles((theme)=>({
    teamParas:{
        display:"flex",
        flexWrap:"wrap"
    }
}))
const classes = useStyles();
  return (
    <>
        <div id='team'>
            <img src='./Assets/wave2.png' className='teamTopImg'/>
            <Grid container justifyContent='space-evenly'>
                <Grid item xs={11} md={9} lg={7} className='teamHeader'>
                    <h1>OUR TEAM</h1>
                </Grid>
            </Grid>
            <Grid container justifyContent='space-evenly'>
                <Grid item xs={11}>
                    <Grid container justifyContent='space-evenly' className={classes.teamParas}>
                        <Grid item lg={2} md={3} sm={4} xs={8} className='teamPara'>
                            <img src='./Assets/slider11.jpg' alt=''/>
                            <h2>Name</h2>
                            <h4>The Professor</h4>
                        </Grid>
                        <Grid item lg={2} md={3} sm={4} xs={8} className='teamPara'>
                            <img src='./Assets/slider10.jpg' alt=''/>
                            <h2>Name</h2>
                            <h4>The Professor</h4>
                        </Grid>
                        <Grid item lg={2} md={3} sm={4} xs={8} className='teamPara'>
                            <img src='./Assets/slider12.jpg' alt=''/>
                            <h2>Name</h2>
                            <h4>The Professor</h4>
                        </Grid>
                        <Grid item lg={2} md={3} sm={4} xs={8} className='teamPara'>
                            <img src='./Assets/slider13.jpg' alt=''/>
                            <h2>Name</h2>
                            <h4>The Professor</h4>
                        </Grid>
                        <Grid item lg={2} md={3} sm={4} xs={8} className='teamPara'>
                            <img src='./Assets/slider15.jpg' alt=''/>
                            <h2>Name</h2>
                            <h4>The Professor</h4>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </>
  )
}

export default Team