import { Grid } from '@material-ui/core'
import React from 'react'
import "./About.css"
function About() {
  return (
    <>
        <div id='about'>
            <Grid container justifyContent='space-evenly'>
                <Grid item xs={11} md={10}>
                    <Grid container justifyContent='space-evenly'>
                        <Grid item lg={6} sm={11} className='aboutPara'>
                            <h1>ABOUT US</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised remaining essentially unchanged. It was popularisedremaining essentially unchanged. It was popularised
                            </p>
                        </Grid>
                        <Grid item xs={7} md={6} className='aboutImg'>
                            <img src='./Assets/slider5.jpg' alt=''/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </>
  )
}

export default About