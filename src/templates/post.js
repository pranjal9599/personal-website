import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';


export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: {slug: { eq: $slug }}) {
            frontmatter {
                title
                subtitle
            }
            body
        }
    }
`;

const Post = ({data}) => (
    <Layout>
        <Helmet>
            <title>{data.mdx.frontmatter.title} - Pranjal Saxena</title>
        </Helmet>
        <h1>{data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
)

export default Post;