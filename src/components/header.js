import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const Header = () => (
  <div css={css`
    width: 100%;
    position: sticky;
    background: #ffffffb0;
    backdrop-filter: blur(20px);
    @media(prefers-color-scheme: dark) {
      background: #000000b0;
    }
    top: 0;
    z-index: 10000;
    height: 100px;
    display: flex;

    @media(max-width: 480px) {
      height: 70px;
    }

  `}>
    <header css={css`
    display: flex;
    max-width: 90vw;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 480px) {
      justify-content: flex-start;
    }

    margin: 0 auto;


    top: 0;
    a { 
      padding: 0px 10px;
      text-decoration: none;

      &:hover {
        opacity: 0.5;
      }
    }

	
  `}>
      <Link css={css`
                    @media ( max-width: 480px) {
                      display: none;
            }`} to="/">Pranjal Saxena</Link>
      <div>
        <Link to="/">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About Me</Link>
      </div>
    </header>
  </div>
)


export default Header;
