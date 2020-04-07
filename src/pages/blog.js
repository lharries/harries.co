import React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/blogList"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="All posts" />
      <Bio />
      <BlogList />
    </Layout>
  )
}

export default Blog
