import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const Header = () => (
<header css={css`
    display: flex;
    width: 100%;
    justify-content: center;
    background: #fffffff0;
    backdrop-filter: blur(5px);
    position: sticky;
    padding: 30px 0px;
    z-index: 10000;
    height: 100px;

    @media(max-width: 480px) {
      height: 75px;
    }

    top: 0;
    a { 
      padding: 0px 10px;
      text-decoration: none;
    }
  `}>
    <Link to="/">Projects</Link> 
    <Link to="/blog">Blog</Link> 
    <Link to="/contact">Contact</Link>
    <a href="https://twitter.com/pranjal9599">Twitter</a> 
    <a href="https://github.com/pranjal9599">Github</a> 
  </header>
)


export default Header;