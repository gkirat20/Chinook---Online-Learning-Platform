import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my Personal Portfolio!
      </SectionTitle>
        <SectionText>
         Hello, I'm Kirat Gill. This online portfolio is dedicated to showcasing my accomplishments in the domain of Computer Science, not restricted to academics!
        </SectionText>   
    </LeftSection>
  </Section>
);

export default Hero;