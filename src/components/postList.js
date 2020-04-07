import React from "react"
import { rhythm } from "../utils/typography"
import { graphql, Link, useStaticQuery } from "gatsby"

const PostList = ({category}) => {
  const data = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              category
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges.filter((edge) => edge.node.frontmatter.category === category)
  return (
    <div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h2
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h2>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                className="text-h3"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </div>
  )
}

export default PostList
