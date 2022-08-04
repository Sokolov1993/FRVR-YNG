import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

import stylesFooter from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={stylesFooter.footer}>
      <div className={stylesFooter.wrapper}>
        <div className={stylesFooter.footerIcons}>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <YouTubeIcon />
          </a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
            <PinterestIcon />
          </a>
        </div>
        <div className={stylesFooter.footerTitles}>
          <p>© 2022 Forever 21 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
