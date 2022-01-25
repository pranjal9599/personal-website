import React from "react"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ProjectPreview = ({ project }) => (
  <div
    css={css`
      padding: 50px 0px;
      border-bottom: 1px solid #99999911;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.01) translateY(-20px);
      }
    `}
  >
    <span
      css={css`
        color: #999;
      `}
    >
      {project.subtitle}
    </span>
    <Link
      to={"/" + project.slug}
      css={css`
        text-decoration: none;
      `}
    >
      <h3
        css={css`
          font-weight: 500;
          font-size: 3rem;
          margin-top: 10px;
          margin-bottom: 30px;
          @media (max-width: 480px) {
            font-size: 2rem;
            margin-bottom: 20px;
          }
        `}
      >
        {project.title}
      </h3>

      <Image
        fluid={project.image.childImageSharp.fluid}
        css={css`
          width: 100%;
          height: 450px;
          @media (max-width: 480px) {
            height: 250px;
          }
          object-position: top left !important;
          object-fit: cover;
        `}
        alt={project.title}
      />
    </Link>
  </div>
)

export default ProjectPreview
