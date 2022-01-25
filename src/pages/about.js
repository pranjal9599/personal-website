import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"

function About() {
  return (
    <Layout>
      <div
        css={css`
          height: calc(100vh - 200px);
          display: flex;
          justify-content: center;
          flex-direction: column;

          @media (max-width: 480px) {
            display: block;
          }
        `}
      >
        <p
          css={css`
            font-size: 2rem;
            font-weight: 300;
            // text-align: justify;
            @media (max-width: 480px) {
              font-size: 1.4rem;
            }
          `}
        >
          Hi, My name is Pranjal Saxena. I'm a{" "}
          <b>
            <i>programmer and designer</i>
          </b>{" "}
          working mainly on{" "}
          <b>
            <i>interaction design &amp; web development</i>
          </b>
          . My day to day tools include Javascript, React, NodeJS, Graphql,
          Golang, Figma &amp; Principle. Currently I'm{" "}
          <b>
            <i>exploring WebAssembly &amp; Compilers</i>.
          </b>
          <br />
          <br />I can be reached at on{" "}
          <a href="https://twitter.com/pranjal9599">Twitter</a> or on{" "}
          <a href="mailto:pranjal9599+blog@gmail.com">
            pranjal9599+blog@gmail.com
          </a>
        </p>
        <p></p>
        <div>Links</div>
        <div
          css={css`
            display: flex;
            width: 100%;
            font-size: 1.4rem;
            padding: 10px 0px;
            @media (max-width: 480px) {
              font-size: 1.4rem;
            }
            a {
              text-decoration: none;
              padding: 0px 10px;
              &:first-of-type {
                padding-left: 0;
              }
            }
          `}
        >
          <a href="https://twitter.com/pranjal9599">Twitter</a> /
          <a href="https://github.com/pranjal9599">Github</a> /
          <a href="https://dribbble.com/pranjal9599">Dribbble</a>
        </div>
      </div>
    </Layout>
  )
}

export default About
