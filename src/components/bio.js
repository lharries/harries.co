/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <p
          style={{
            marginBottom: "auto",
            marginTop: "auto",
          }}
        >
          By <a href="/">{author.name}</a>.{/*{author.summary}*/}
          {` `}
          Say hello on{" "}
          <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>.
        </p>
        <form
          name="email"
          method="POST"
          data-netlify="true"
          className="form-inline"
          action="/success"
        >
          <label htmlFor="email">Subscribe to new posts:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            style={{ margin: "5px" }}
          />
          <input type="hidden" name="form-name" value="email" />
        </form>
      </div>
    </div>
  )
}

export default Bio
