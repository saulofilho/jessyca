import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import Layout from '../components/Layout'

export const WhatCameraTemplate = ({
  cases = []
}) => (
    <Location>
      {() => {
        let filteredPosts = cases

        filteredPosts = filteredPosts.filter(post =>
          post.frontmatter.title.toLowerCase()
        )

        return (
          <div className="ideas container">
            {filteredPosts.map(post => (
              <section className="card">
                <h1
                  className="post-title"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  {post.frontmatter.title}
                </h1>
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                />
              </section>
            ))}
          </div>
        )
      }}
    </Location>
  )

// Export Default WhatCamera for front-end
const WhatCamera = ({ data: { page, cases }, location }) => (
  <Layout
    location={location}
    title={page.frontmatter.title || false}
  >
    <WhatCameraTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      cases={cases.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
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
    cases: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "postcam" } } }
      sort: { order: DESC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`
