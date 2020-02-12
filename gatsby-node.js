exports.createPages = async ({ actions, graphql, reporter }) => {
    const projects = await graphql(`
        query MyQuery {
            allMdx(filter: {frontmatter: {type: {eq: "project"}}}) {
            nodes {
                frontmatter {
                slug
                }
            }
            }
        }
    `);

    const blog = await graphql(`
        query MyQuery {
            allMdx(filter: {frontmatter: {type: {eq: "blog"}}}) {
            nodes {
                frontmatter {
                slug
                }
            }
            }
        }
    `);

    if (projects.errors || blog.errors) {
        reporter.panic('failed to create posts', projects.errors);
    }

    const allProjects = projects.data.allMdx.nodes;

    allProjects.map(post => {
        actions.createPage({
            path: post.frontmatter.slug,
            component: require.resolve('./src/templates/portfolio.js'),
            context: {
                slug: post.frontmatter.slug,
            }
        });
    });

    const blogPosts = blog.data.allMdx.nodes;
    blogPosts.map(post => {
        actions.createPage({
            path: post.frontmatter.slug,
            component: require.resolve('./src/templates/blog.js'),
            context: {
                slug: post.frontmatter.slug,
            }
        });
    })
}
