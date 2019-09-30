import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(filter: {frontmatter: {type: {eq: "project"}}}) {
                nodes {
                    frontmatter {
                        title
                        subtitle
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
        image: project.frontmatter.image,
        slug: project.frontmatter.slug
    }));
};

export default useProjects;