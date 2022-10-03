import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import './question.css'

const useStyles = makeStyles((theme)=>({
    faqParaTopText:{
        color:"#000",
        borderRadius:"50%"
    },
    faqParaBottomText:{
        color:"#251001",
        fontWeight:"500",
        width:"90%"
    },
    faqParaIcon:{
        color:"#000",
        fontSize:"2rem"

    }
    
}))
function Question() {
const classes = useStyles();
    
  return (
    <>  
        <div id='faqs'>
            <Grid container justifyContent='space-evenly'>
                <Grid item xs={11} md={10} lg={9} className='faqHeader'> 
                    <h1>FAQs</h1>
                </Grid>
            </Grid>
            <Grid container justifyContent='space-evenly' className='faqParasContainer'>
                <Grid item xs={11} md={10} className='faqParas'>
                    <Grid contanier  justifyContent='space-evenly' className='faqParaContainer'>
                        <Grid item className='faqPara'>
                            <Accordion className='faqParaTexts'>
                                <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.faqParaIcon}/>} className={classes.faqParaTopText}>
                                    <h4>What are NFTs</h4>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p className={classes.faqParaBottomText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item className='faqPara'>
                            <Accordion className='faqParaTexts'>
                                <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.faqParaIcon}/>} className={classes.faqParaTopText}>
                                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting</h4>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p className={classes.faqParaBottomText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item className='faqPara'>
                            <Accordion className='faqParaTexts'>
                                <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.faqParaIcon}/>} className={classes.faqParaTopText}>
                                    <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p className={classes.faqParaBottomText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item className='faqPara'>
                            <Accordion className='faqParaTexts'>
                                <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.faqParaIcon}/>} className={classes.faqParaTopText}>
                                    <h4>reproduced in their exact original form, accompanied by English versions fro Rackham.</h4>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p className={classes.faqParaBottomText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item className='faqPara'>
                            <Accordion className='faqParaTexts'>
                                <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.faqParaIcon}/>} className={classes.faqParaTopText}>
                                    <h4>Contrary to popular belief, Lorem Ipsum is not simply random text.</h4>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p className={classes.faqParaBottomText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </>
  )
}

export default Question