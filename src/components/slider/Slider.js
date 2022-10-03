import React from 'react'
import "./Slider.css"
import { Animator, ScrollContainer, ScrollPage, Move, MoveOut } from "react-scroll-motion";

function Slider() {
  return (
    <>
         <div id='slider'>
         <ScrollContainer >
            <Animator animation={Move(200,0)} styles>
                    <div className='sliderContainer'>                        
                        <div className='sliderImg'><img src='./Assets/slider5.jpg' alt=''/></div>
                        <div className='sliderImg'><img src='./Assets/slider12.jpg' alt=''/></div>
                        <div className='sliderImg'><img src='./Assets/slider11.jpg' alt=''/></div>
                        <div className='sliderImg'><img src='./Assets/slider10.jpg' alt=''/></div>
                        <div className='sliderImg'><img src='./Assets/slider9.jpg' alt=''/></div>
                        <div className='sliderImg'><img src='./Assets/slider3.jpg' alt=''/></div>
                    </div>
            </Animator>
        </ScrollContainer>
        <ScrollContainer>
            <Animator animation={Move(-200,0)}>
                    <div className='sliderContainer'>
                        <div className='sliderImg'><img src='./Assets/slider6.jpg' alt=''/></div>
                        <div className='sliderImg'><img src='./Assets/slider7.jpg' alt=''/></div>
                        <div className='sliderImg'><img src='./Assets/slider13.jpg' alt=''/></div>
                        <div className='sliderImg'><img src='./Assets/slider14.jpg' alt=''/></div>
                        <div className='sliderImg'><img src='./Assets/slider15.jpg' alt=''/></div>
                        <div className='sliderImg'><img src='./Assets/slider4.jpg' alt=''/></div>
                    </div>
                    </Animator>
        </ScrollContainer>
        </div>
    </>
  )
}

export default Slider