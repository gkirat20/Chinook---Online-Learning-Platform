import React from 'react';
import { DiFirebase, DiReact, DiZend} from 'react-icons/di';
import { AiFillCode } from "react-icons/ai";
import { VscPreview} from "react-icons/vsc";
import { GoDatabase } from "react-icons/go";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, MainImage } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id ="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      In the field of Computer Science I have worked on wide range of technologies ranging from 
      Back-end data services to Front-end developement.
    </SectionText>
    <List>
    <ListItem>
        <AiFillCode size="4rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java,
            C/C++, 
            C#, 
            and
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <VscPreview size="4rem" />
        <ListContainer>
          <ListTitle>Front-End Specific</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML/CSS, Vanilla JavaScript,
            Vue.js
            React.js,
            Next.js and Bootstrap
           
          </ListParagraph>
        </ListContainer>
      </ListItem>
    <ListItem>
        <GoDatabase size="4rem" />
        <ListContainer>
          <ListTitle>Back-End Specific</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, 
            MySQL,
            MongoDB and
            Oracle DB    
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>

);

export default Technologies;
