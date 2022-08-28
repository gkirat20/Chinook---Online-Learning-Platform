import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { courses } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id ="courses">
    <SectionDivider />
    <SectionTitle main>Courses</SectionTitle>
      <GridContainer>
        {courses.map(({course_id, image, title, description, courseInfo}) => (
         <BlogCard key ={course_id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
         </BlogCard>
        ))}
      </GridContainer> 
  </Section>
);

export default Projects;