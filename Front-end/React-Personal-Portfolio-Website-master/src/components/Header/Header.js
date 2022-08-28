import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href=" /">
        <a style={{display:"flex", alignItems: "center", color: 'white', marginBottom: '10px'}}>
      {/*<DiCssdeck size = "2rem" />*/} <Span> Kirat's Portfolio </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
      {/*<li>
        <Link href="#resume">
          <NavLink>Resume</NavLink>
        </Link>
      </li>*/}
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/gkirat20">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/kirat-gill-b408261b7/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>

);

export default Header;
