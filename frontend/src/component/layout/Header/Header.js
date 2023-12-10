import React from 'react';
import { ReactNavbar } from 'overlay-navbar';
import logo from '../../../images/sastomandu.png';

const options = {
  burgerColor: 'tomato',
  burgerColorHover: '#eb4034',
  logo,
  logoWidth: '20vmax',
  navColor1: 'white',
  logoHoverSize: '10px',
  logoHoverColor: 'white',
  link1Text: 'Home',
  link2Text: 'Products',
  link3Text: 'Contact',
  link4Text: 'About',
  link1Url: '/',
  link2Url: '/products',
  link3Url: '/contact',
  link4Url: '/about',
  link1Size: '1.3vmax',
  link1Color: 'rgba(35, 35, 35,0.8)',
  nav1justifyContent: 'flex-end',
  nav2justifyContent: 'flex-end',
  nav3justifyContent: 'flex-start',
  nav4justifyContent: 'flex-start',
  link1ColorHover: '#eb4034',
  link1Margin: '1vmax',
  profileIconUrl: '/login',
  profileIconColor: 'rgba(35, 35, 35,0.8)',
  searchIconColor: 'rgba(35, 35, 35,0.8)',
  cartIconColor: 'rgba(35, 35, 35,0.8)',
  profileIconColorHover: '#eb4034',
  searchIconColorHover: '#eb4034',
  cartIconColorHover: '#eb4034',
  cartIconMargin: '1vmax',
  
  logoAnimationTime: 0.1,
  logoTransition: 0.1,
  link1AnimationTime: 0.1,
  link2AnimationTime: 0.1,
  link3AnimationTime: 0.1,
  link4AnimationTime: 0.1,
  searchIconAnimationTime: 0.1,
  cartIconAnimationTime: 0.1,
  profileIconAnimationTime: 0.1,
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
