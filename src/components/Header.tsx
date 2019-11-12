import React from 'react';
import styled  from 'styled-components';
import { AppColors } from '../theme/AppColors';
import headerBackground from '../assets/header.jpg'
import { ReactComponent as Logo } from '../assets/logo.svg'

const HeroBar = styled.header`
  color: ${AppColors.white};
  background: url(${headerBackground}) no-repeat center;
  background-size: cover;
  height: 400px;

  h1 {
    margin: 0;
    font-size: 5em;
    font-weight: 800;
    text-align: center;
    color: ${AppColors.white};
  }

  .logo {
    height: 50px;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
  }
`;

export const Header = () => (
  <HeroBar className="flex-center-content">
    <Logo className="logo" />
    <h1>Find a show</h1>
  </HeroBar>
)