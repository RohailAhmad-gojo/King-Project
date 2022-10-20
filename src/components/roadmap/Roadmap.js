import { Button, colors, Grid, makeStyles } from '@material-ui/core'
import React, { useRef } from 'react'
import './Roadmap.css'
import HTMLFlipBook from 'react-pageflip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme)=>({
    roadmapIconBack:{
        backgroundColor:"rgb(224,193,126)",
        borderRadius:"50%",
        padding:"5px",
        fontSize:"3rem",
        cursor:"pointer"
    },
    roadmapIconBackBtn:{
        padding:"0",
        color:"#fff"
    },
    roadmapIconForward:{
        backgroundColor:"rgb(224,193,126)",
        borderRadius:"50%",
        padding:"5px",
        fontSize:"3rem",
        cursor:"pointer"
    },
}))

function Roadmap() {
    const classes = useStyles();
    const book = useRef();
  return (
    <>
        <div id='roadmap'>
            <Grid container justifyContent='space-evenly'>
                <Grid item xs={11} md={10} className='roadmapHeader'>
                    <h1>ROADMAP</h1>
                </Grid>
            </Grid>
            <Grid container  className='roadmapParas'> 
                <Grid item xs={12} sm={11} md={10} className="roadmapParaContainer">
                        <HTMLFlipBook  id="helloFliper" width={360} height={660} className='roadmapPara' showCover={true} ref={book}>
{ /*==================================================PAGE 1==========================================*/}
                            <div className="roadmapPageOne2">
                                <div className='roadmapPageOneImg'>
                                <img src='./Assets/pages2.jpg'/>
                                </div>
                                <div className='roadmapPageOneText'>
                                    <h2>KINGs NFTs COlLECTION</h2>
                                    <img src='./Assets/border.png'/>
                                    <h1></h1>
                                </div>
                            </div>     
{ /*==================================================PAGE 1==========================================*/}
                            <div className="roadmapPageOne">
                                <div className='roadmapPageOneImg'>
                                <img src='./Assets/pages2.jpg'/>
                                </div>
                                <div className='roadmapPageOneText'>
                                    <h2>KINGs NFTs COlLECTION</h2>
                                    <img src='./Assets/border.png'/>
                                    <h1></h1>
                                </div>
                            </div> 
{ /*==================================================PAGE 2==========================================*/}
                            <div className="roadmapPageTwo">
                                <div className='roadmapPageTwoHeader'>
                                    <h2>ROADMAP</h2>
                                    <img src='./Assets/sword.png'/>
                                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                </div>
                                <div className='roadmapPageFooter'>
                                    <img src='./Assets/border.png'/>
                                    <h1>1</h1>
                                </div>
                            </div>
{ /*==================================================PAGE 3==========================================*/}
                            <div className="roadmapPageOne">
                                <div className='roadmapPageOneImg'>
                                <img src='./Assets/slider9.jpg'/>
                                </div>
                                <div className='roadmapPageOneText'>
                                    <h2>KINGs NFTs COlLECTION</h2>
                                    <img src='./Assets/border.png'/>
                                    <h1>2</h1>
                                </div>
                            </div>
{ /*==================================================PAGE 4==========================================*/}
                            <div className="roadmapPageFour">
                                <div className='roadmapPageFourHeader'>
                                    <h2>0%</h2>
                                    <img src='./Assets/sword.png'/>
                                    <ul>
                                        <li><p>Contrary to popular belief, Lorem Ipsum is not simply random tex</p></li>
                                        <li><p>There are many variations of passages of Lorem Ipsum available</p></li>
                                        <li><p>believable. If you are going to use a passage of Lorem Ipsum, you</p></li>
                                        <li><p>from repetition, injected humour, or non-characteristic words etc</p></li>
                                    </ul>
                                </div>
                                <div className='roadmapPageFooter'>
                                    <img src='./Assets/border.png'/>
                                    <h1>3</h1>
                                </div>
                            </div>
{ /*==================================================PAGE 5==========================================*/}
                            <div className="roadmapPageOne">
                                <div className='roadmapPageOneImg'>
                                <img src='./Assets/slider10.jpg'/>
                                </div>
                                <div className='roadmapPageOneText'>
                                    <h2>KINGs NFTs COlLECTION</h2>
                                    <img src='./Assets/border.png'/>
                                    <h1>4</h1>
                                </div>
                            </div>
{ /*==================================================PAGE 6==========================================*/}
                            <div className="roadmapPageFour">
                                <div className='roadmapPageFourHeader'>
                                    <h2>25%</h2>
                                    <img src='./Assets/sword.png'/>
                                    <ul>
                                        <li><p>Contrary to popular belief, Lorem Ipsum is not simply random tex</p></li>
                                        <li><p>There are many variations of passages of Lorem Ipsum available</p></li>
                                        <li><p>believable. If you are going to use a passage of Lorem Ipsum, you</p></li>
                                        <li><p>from repetition, injected humour, or non-characteristic words etc</p></li>
                                    </ul>
                                </div>
                                <div className='roadmapPageFooter'>
                                    <img src='./Assets/border.png'/>
                                    <h1>5</h1>
                                </div>
                            </div>
{ /*==================================================PAGE 7==========================================*/}
                            <div className="roadmapPageOne">
                                <div className='roadmapPageOneImg'>
                                <img src='./Assets/slider11.jpg'/>
                                </div>
                                <div className='roadmapPageOneText'>
                                    <h2>KINGs NFTs COlLECTION</h2>
                                    <img src='./Assets/border.png'/>
                                    <h1>6</h1>
                                </div>
                            </div>
{ /*==================================================PAGE 8==========================================*/}
                            <div className="roadmapPageFour">
                                <div className='roadmapPageFourHeader'>
                                    <h2>50%</h2>
                                    <img src='./Assets/sword.png'/>
                                    <ul>
                                        <li><p>Contrary to popular belief, Lorem Ipsum is not simply random tex</p></li>
                                        <li><p>There are many variations of passages of Lorem Ipsum available</p></li>
                                        <li><p>believable. If you are going to use a passage of Lorem Ipsum, you</p></li>
                                        <li><p>from repetition, injected humour, or non-characteristic words etc</p></li>
                                    </ul>
                                </div>
                                <div className='roadmapPageFooter'>
                                    <img src='./Assets/border.png'/>
                                    <h1>7</h1>
                                </div>
                            </div>
{ /*==================================================PAGE 9==========================================*/}
                            <div className="roadmapPageOne">
                                <div className='roadmapPageOneImg'>
                                <img src='./Assets/slider12.jpg'/>
                                </div>
                                <div className='roadmapPageOneText'>
                                    <h2>KINGs NFTs COlLECTION</h2>
                                    <img src='./Assets/border.png'/>
                                    <h1>8</h1>
                                </div>
                            </div>
{ /*==================================================PAGE 10==========================================*/}
                            <div className="roadmapPageFour">
                                <div className='roadmapPageFourHeader'>
                                    <h2>75%</h2>
                                    <img src='./Assets/sword.png'/>
                                    <ul>
                                        <li><p>Contrary to popular belief, Lorem Ipsum is not simply random tex</p></li>
                                        <li><p>There are many variations of passages of Lorem Ipsum available</p></li>
                                        <li><p>believable. If you are going to use a passage of Lorem Ipsum, you</p></li>
                                        <li><p>from repetition, injected humour, or non-characteristic words etc</p></li>
                                    </ul>
                                </div>
                                <div className='roadmapPageFooter'>
                                    <img src='./Assets/border.png'/>
                                    <h1>9</h1>
                                </div>
                            </div>
{ /*==================================================PAGE 11==========================================*/}
                            <div className="roadmapPageOne">
                                <div className='roadmapPageOneImg'>
                                <img src='./Assets/slider15.jpg'/>
                                </div>
                                <div className='roadmapPageOneText'>
                                    <h2>KINGs NFTs COlLECTION</h2>
                                    <img src='./Assets/border.png'/>
                                    <h1>10</h1>
                                </div>
                            </div>
{ /*==================================================PAGE 12==========================================*/}
                            <div className="roadmapPageFour">
                                <div className='roadmapPageFourHeader'>
                                    <h2>100%</h2>
                                    <img src='./Assets/sword.png'/>
                                    <ul>
                                        <li><p>Contrary to popular belief, Lorem Ipsum is not simply random tex</p></li>
                                        <li><p>There are many variations of passages of Lorem Ipsum available</p></li>
                                        <li><p>believable. If you are going to use a passage of Lorem Ipsum, you</p></li>
                                        <li><p>from repetition, injected humour, or non-characteristic words etc</p></li>
                                    </ul>
                                </div>
                                <div className='roadmapPageFooter'>
                                    <img src='./Assets/border.png'/>
                                    <h1>11</h1>
                                </div>
                            </div>
{ /*==================================================PAGE 1==========================================*/}
                            <div className="roadmapPageOne">
                                <div className='roadmapPageOneImg'>
                                <img src='./Assets/slider14.jpg'/>
                                </div>
                                <div className='roadmapPageOneText'>
                                    <h2>KINGs NFTs COlLECTION</h2>
                                    <img src='./Assets/border.png' alt=''/>
                                    <h1></h1>
                                </div>
                            </div> 
                            
                        </HTMLFlipBook>
                        <div className='roadmapIconBack' onClick={() =>book.current.pageFlip().flipPrev()}><Button className={classes.roadmapIconBackBtn}><ArrowBackIcon  className={classes.roadmapIconBack}/></Button></div>
                        <div className='roadmapIconForward' onClick={() =>book.current.pageFlip().flipNext()} ><Button className={classes.roadmapIconBackBtn}><ArrowForwardIcon className={classes.roadmapIconForward}/></Button></div>
                </Grid>
            </Grid>
        </div>
    </>
  )
}

export default Roadmap