import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';



const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
   const carouselRef = useRef();

  return (
    <Section id = "about">
    <SectionDivider />
    <br/>
    <br/>
    <br/>
    <SectionTitle>About Me</SectionTitle>
    <br /> 
      <img src="./images/Kirat1.png" alt="" class="center" width="370" height="370" borderRadius="400/2" overflow= "hidden"/>  
      <br /> 
      <SectionText>
      I'm a third-year University of Manitoba Undergraduate Computer Science Co-op student.
      As a Junior Programmer/Analyst, I'm now finishing my first internship with the Federal Government of Canada.
      I am a problem solver, a critical thinker, and a perpetual student.
      I'm always on the lookout for possibilities to expand my knowledge.
      I have extensive experience in web and mobile development, along with game development and machine learning. 
      In my free time, I enjoy running, trying new foods and going for long drives with friends.
      <br /> 
      <br />
      Prospective Sprecializations:
      <br /> 
      <br />
      • Artificial Intelligence
      <br /> 
      • Software Engineering
      <br />
      • Databases
      </SectionText>
    </Section>
    
  );
  
};

export default Timeline;
