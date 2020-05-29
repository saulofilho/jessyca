import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import Layout from '../components/Layout'
import Tilt from 'react-tilt'

export const byDate = postcamPost => {
  const now = Date.now()
  return postcamPost.filter(post => Date.parse(post.date) <= now)
}

export const WhatCameraTemplate = ({
  postcamPost = []
}) => (
    <Location>
      {() => {
        let filteredPosts = byDate(postcamPost)

        filteredPosts = filteredPosts.filter(post =>
          post.frontmatter.title.toLowerCase()
        )

        return (
          <div className="ideas container camera">
            {filteredPosts.map(post => (
              <section 
                key={post.frontmatter.title}
                id={post.frontmatter.title.replace(/\s/g, "")}
                className="card"
              >
                <Tilt className="Tilt" options={{ max: 100 }}>
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
                </Tilt>
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
const WhatCamera = ({ data: { page, postcamPost }, location }) => (
  <Layout
    location={location}
    title={page.frontmatter.title || false}
  >
    <WhatCameraTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      postcamPost={postcamPost.edges.map(post => ({
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
      frontmatter {
        title
      }
    }
    postcamPost: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "postcam" } } }
      sort: { order: ASC, fields: [frontmatter___date] }
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
            date
          }
        }
      }
    }
  }
`
