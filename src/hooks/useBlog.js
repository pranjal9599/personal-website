import { graphql, useStaticQuery } from 'gatsby';

const useBlog = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(filter: {frontmatter: {type: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                    frontmatter {
                        title
                        subtitle
                        date
                        description
                        image {
                            childImageSharp {
                                fluid {
                                    srcSet
                                }
                            }
                        }
                        slug
                    }
                }
            }
        }
    `);

    return data.allMdx.nodes.map(project => ({
        title: project.frontmatter.title,
        subtitle: project.frontmatter.subtitle,
        description: project.frontmatter.description,
        date: project.frontmatter.date,
        image: project.frontmatter.image,
        slug: project.frontmatter.slug
    }));
};

export default useBlog;