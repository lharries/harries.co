import React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"

const Blog = () => {
  return (
    <Layout>
      <SEO title="All posts" />
      <Bio />
      <div className="container">
        <div className="row">
          <h2>Blog Posts</h2>
          <PostList category="blog" />
        </div>
        <br />
        <div className="row">
          <h2>Guides</h2>
          <PostList category="guide" />
        </div>
        <br />
        <div className="row">
          <h2>Notes</h2>
          <PostList category="note" />
        </div>
      </div>
    </Layout>
  )
}

export default Blog
