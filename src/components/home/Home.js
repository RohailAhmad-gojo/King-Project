import { Grid, makeStyles, Button } from '@material-ui/core'
import React from 'react'
import "./Home.css"

const useStyles = makeStyles((theme)=>({
    homeContainer:{
        background: "url(./Assets/medival1.png) no-repeat scroll center 0/cover",
        backgroundPosition:"center",
        position: "relative",
        padding:"5% 0",
        isolation:"isolate",
        color:"#fff",
        height:"110vh",
        '&::after': {
            content:`''`,
            position:"absolute",
            zIndex:"-1",
            inset:"0",
            opacity:"0.8",
            background:"rgba(0, 0, 0, 0.15)"
    },
},
    homeContainerOverlay:{
        display:"flex",
        justifyContent:'center',
        alignItems: "center"   
    },
    homeBtn:{
        fontSize:"1.2rem",
        fontWeight:"400",
        color:"#fff",
        border:"1.5px solid #fff",
        padding:"10px 35px",
        borderRadius:"50px",
        borderTopLeftRadius:"20px",
        borderBottomRightRadius:"20px",
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        transition: "all 400ms",
        '&:hover': {
            transform: "translateX(30px)",
        }
        
    }
}))

function Home() {
const classes = useStyles();

  return (
    <>
      <div id="home">
        <div className='homeOverlay'>
            <Grid container className={classes.homeContainer} justifyContent='space-evenly'>
                <Grid item  className={classes.homeContainerOverlay} xs={11} md={10}>
                    <Grid container className= "homeParaContainer">
                        <Grid item className="homePara"  lg={7} md={9} xs={11}>
                            <h1>
                                Hi! We're The <br/>
                                Name Of The Nfts
                            </h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their</p>
                            <Button className={classes.homeBtn} href=''><img src='./Assets/opensea.svg' className='homeBtnIcon' alt=''/> MINT NOW</Button>
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
        </div>
      </div>
    </>
  )
}

export default Home