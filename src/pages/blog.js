import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';

import useBlog from '../hooks/useBlog';

const BlogPost = ({ post }) => (
    <div css={css`
        display: grid;
        grid-template-columns: auto 1fr;
        //margin: 50px 0px;

        border-bottom: 1px solid #99999920;

        padding: 50px 0px;

        &:hover {
            opacity: 0.4;
        }

        @media (prefers-color-scheme: dark) {
            border-bottom: 1px solid #ffffff30;
        }

        @media ( max-width: 480px) {
            grid-template-columns: 1fr;
            img {
                display: none;
            }
        }
    `}>
        <Helmet>
            <title>Thoughts &amp; Ideas of Pranjal Saxena</title>
        </Helmet>
        <Link
            css={css`
                text-decoration: none;
            `}
            to={post.slug}
        >
            <h2 css={css` 
                font-weight: 600;    
            `}>{post.title}</h2>
            <p css={css`
                color: #222;    
				  @media (prefers-color-scheme: dark) {
				  	color: #ffffff;
				  }

            `}>{post.description}</p>
            <h5 css={css`font-size: 0.9rem; color: #999999f0; font-weight: 200; margin: 10px 0px;`}>
                {post.date}
            </h5>
            {/* <Link to={post.slug} css={css`
                text-decoration: none; 
                text-transform: uppercase; 
                opacity: 0.7;
                transition: all 0.1s ease;
                &:hover {
                    font-weight: 600;
                    opacity: 1;
                }
                cursor: pointer;
            `}>Read More &rarr;</Link> */}
        </Link>
    </div>
)

const Blog = () => {
    const blogPosts = useBlog();

    return (
        <Layout>

            {blogPosts.map(post => <BlogPost post={post} key={post.slug} />)}

        </Layout>
    )
}

export default Blog;
