import React from 'react';
import { css } from '@emotion/core';
import {Link} from 'gatsby';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';

import Layout from '../components/layout';

import useBlog from '../hooks/useBlog';

const BlogPost = ({post}) => (
    <div css={css`
        display: grid;
        grid-template-columns: auto 1fr;
        //margin: 50px 0px;

        border-bottom: 1px solid #99999920;

        padding: 50px 0px;

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
        <Image fluid={post.image.childImageSharp.fluid} css={css`
            width: 150px;
            height: 150px;
            object-fit: cover;
        `}/>
        <div css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0px 30px;
        `}>
            <h2 css={css` 
                font-weight: 600;    
            `}>{post.title}</h2>
            <h5 css={css`font-size: 1.1rem; color: #999999f0; font-weight: 200; margin: 10px 0px;`}>
                {post.date}
            </h5>
            <p css={css`
                color: #222;    
            `}>{post.description}</p>
            <span to={post.slug} css={css`
                text-decoration: none; 
                text-transform: uppercase; 
                opacity: 0.7;
                transition: all 0.1s ease;
                &:hover {
                    font-weight: 600;
                    opacity: 1;
                }
                cursor: pointer;
            `}>Read More &rarr;</span> 
        </div>
    </div>
)

const Blog = () => {
    const blogPosts = useBlog();

    return (
        <Layout>
            <h2 css={css`font-size: 2.5rem; font-weight: 400;`}>Blog</h2>
            <hr css={css`
                margin: 40px 0px;
                border-color: #99999911;
            `}/>

            {blogPosts.map(post => <BlogPost post={post} key={post.slug}/>)}

        </Layout>
    )
}

export default Blog;