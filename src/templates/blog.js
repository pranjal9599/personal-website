import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';
import { css } from '@emotion/core';


export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: {slug: { eq: $slug }}) {
            frontmatter {
                title
                description
                date
                keywords
            }
            body
        }
    }
`;

const Post = ({ data }) => (
    <Layout>
        <Helmet>
            <title>{data.mdx.frontmatter.title}</title>
            <meta name="description" content={data.mdx.frontmatter.description} />
            <meta name="title" content={data.mdx.frontmatter.title} />
            <meta name="keywords" content={data.mdx.frontmatter.keywords} />
        </Helmet>
        <h1
            css={css`
                font-size: 4rem;
                padding: 40px 0px;
                @media ( max-width: 480px) {
                    font-size: 2rem;
                }
            `}
        >{data.mdx.frontmatter.title} &rarr;</h1>
        <span css={css`opacity: 0.5;`}>{data.mdx.frontmatter.date}</span>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
)

export default Post;