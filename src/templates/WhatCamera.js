import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'

import PostSection from '../components/PostSection'
// import PostCategoriesNav from '../components/PostCategoriesNav'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const WhatCameraTemplate = ({
  title,
  posts = [],
}) => (
    <Location>
      {({ location }) => {
        let filteredPosts = posts

        filteredPosts = filteredPosts.filter(post =>
          post.frontmatter.title.toLowerCase()
        )

        return (
          <main className="Blog" id="blog-hero">
            <h1>{title}</h1>
            <PostSection posts={filteredPosts} />
            {console.log("p", filteredPosts.title)}
            {/* <div className="case-hero container">
              <p className="default-text-header">news + views</p>
              <p className="default-text-title" itemProp="title">
                blog
                </p>
              <section className="search-blog">
                <PostCategoriesNav enableSearch categories={postCategories} />
                <div className="default-btn search-btn">
                  <button>search</button>
                </div>
              </section>
              <div className="anchor-down">
                <a href="#posts-section">
                  ↓
                </a>
              </div>
            </div>

            {!!posts.length && (
              <section className="posts-section" id="posts-section">
                <div className="container">
                  <PostSection posts={filteredPosts} />
                </div>
              </section>
            )} */}
          </main>
        )
      }}
    </Location>
  )

// Export Default WhatCamera for front-end
const WhatCamera = ({ data: { page }, location }) => (
  <Layout
    location={location}
    title={page.frontmatter.title || false}
  >
    <WhatCameraTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
    />
  </Layout>
)

export default WhatCamera

export const pageQuery = graphql`
  ## Query for WhatCamera data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query WhatCamera($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        contentType
      }
      html
      frontmatter {
        title
      }
    }
  }
`
