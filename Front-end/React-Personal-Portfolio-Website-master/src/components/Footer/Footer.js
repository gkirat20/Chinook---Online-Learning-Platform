import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Text me here!</LinkTitle>
        <LinkItem href="tel:204-510-6838">204-510-6838</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Any suggestions? contact at</LinkTitle>
        <LinkItem href="gillk6@myumanitoba.ca">gillk6@myumanitoba.ca</LinkItem>
      </LinkColumn>
    </LinkList>
    <br/>
    
    <SocialIconsContainer>
      <CompanyContainer>
       <Slogan>Copyright © 2022 Kirat Gill. All rights reserved.</Slogan>
      </CompanyContainer>
      <SocialIcons href="https://github.com/gkirat20">
        <AiFillGithub size="3rem" />
       </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/kirat-gill-b408261b7/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
