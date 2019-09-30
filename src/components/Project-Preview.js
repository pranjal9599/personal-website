import React from 'react'
import {css} from '@emotion/core';
import Image from 'gatsby-image';
import { Link } from 'gatsby';


const ProjectPreview = ({ project }) => (
    <div css={css` padding: 50px 0px; border-bottom: 1px solid #99999911;`}>
        <span css={css` color: #999; `}>{project.subtitle}</span>
        <Link to={project.slug} css={css`text-decoration: none;`}>
            <h3 css={css`
                font-weight: 500;
                font-size: 3rem;   
                margin-top: 10px;
                margin-bottom: 30px;
            `}>{project.title}</h3>
        </Link>

        <Image fluid={project.image.childImageSharp.fluid} css={css`
            width: 100%;
            height: 450px;
            object-fit: cover;
        `}
        alt={project.title} fadeIn/>
    </div>
)

export default ProjectPreview;