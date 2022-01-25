import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { type: { eq: "project" } } }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
        nodes {
          frontmatter {
            title
            subtitle
            order
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
  `)

  return data.allMdx.nodes.map(project => ({
    title: project.frontmatter.title,
    subtitle: project.frontmatter.subtitle,
    image: project.frontmatter.image,
    slug: project.frontmatter.slug,
  }))
}

export default useProjects
