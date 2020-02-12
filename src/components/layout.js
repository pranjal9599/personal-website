import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';

const Layout = ({ children }) => (
  <>
    <Global styles={css`
      * {
        box-sizing: border-box;
      }

      html,
      body {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
        color: #000;
        font-size: 14px;
        line-height: 1.4;
        cursor: crosshair;
      }

      h1,h2,h3,h4,h5,h6 {
        padding: 0;
        margin: 0;
        line-height: 1.1;
      }

      a {
        color: #000;
      }
      
      pre {
        background-color: #00000010;
        padding: 20px;
      }
      
      p {
        font-size: 1.2rem;
      }

	  @media (prefers-color-scheme: dark) {
		body {
			background-color: #000;
			color: #fff;
		}
		
    a { color: #fff; }
    pre {
      background-color: #ffffff10;
    }

	  }
    `} />
    <Header />


    <main css={css`
                  margin: 2rem auto 4rem;
                  max-width: 90vw;
                  width: 1080px;
    `}>
      {children}
    </main>


  </>
)

export default Layout;
