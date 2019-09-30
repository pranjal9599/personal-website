import React from "react"
import {css} from '@emotion/core';

import Layout from "../components/layout"
import ProjectPreview from '../components/Project-Preview';
import useProjects from "../hooks/useProjects";
import Helmet from "react-helmet";

const IndexPage = () => {
  const projects = useProjects();
  return (
    <Layout>
      <Helmet>
        <title>Webspace of Pranjal Saxena</title>
      </Helmet>
      <section css={css`
          display: flex;
          flex-direction: column;
          //margin-top: -100px;
          height: calc(100vh - 100px);
          justify-content: center;
      `}>
        <h1 css={css`
          font-size: 6rem;
          font-weight: 800;
          padding-bottom: 20px;

          @media(max-width: 480px) {
            font-size: 4rem;
          }

        `}>Pranjal Saxena.</h1>
        <h2 css={css`
          font-weight: 300; 
          font-size: 3rem;

          @media(max-width: 480px) {
            font-size: 1.5rem;
          }
        `}>Designer − Developer − Maker</h2>
      </section>
        {projects.map(project => 
          <ProjectPreview project={project} key={project.slug}/>
        )}
    </Layout>
  )
}

export default IndexPage
