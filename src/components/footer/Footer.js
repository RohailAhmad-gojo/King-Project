import { Grid } from '@material-ui/core'
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
        <div id='footer'>
            <img src='./Assets/wave.png' className='footerTopImg'/>
            <Grid container justifyContent='center'>
                <Grid item className='footerHeader' xs={10} md={8}>
                    <h2>KINGs NFTs Clue</h2>
                    <div className='footerHeaderIcon'>
                        <a href=''><img src='./Assets/twitter2.png' /></a>
                        <a href=''><img src='./Assets/discord2.svg'/></a>
                        <a href=''><img src='./Assets/instagram2.svg'/></a>
                    </div>
                </Grid>
                <Grid item xs={12} className='footerBottom'>
                    <h5>©copyright hold by KINGs NFTs Clue</h5>
                </Grid>
            </Grid>
        </div>
    </>
  )
}

export default Footer