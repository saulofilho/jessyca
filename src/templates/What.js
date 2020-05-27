import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import Layout from '../components/Layout'
import Tilt from 'react-tilt'

export const WhatTemplate = ({
  vaga = []
}) => (
    <Location>
      {() => {
        let filteredPosts = vaga

        filteredPosts = filteredPosts.filter(post =>
          post.frontmatter.title.toLowerCase()
        )

        return (
          <div className="ideas container what">
            {filteredPosts.map(post => (
              <section 
                className="card"
                id={post.frontmatter.title.replace(/\s/g, "")}
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
                  className="blog-post-content what-content"
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

// Export Default What for front-end
const What = ({ data: { page, vaga }, location }) => (
  <Layout
    location={location}
    title={page.frontmatter.title || false}
  >
    <WhatTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      vaga={vaga.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
    />
  </Layout>
)

export default What

export const pageQuery = graphql`
  ## Query for What data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query What($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        contentType
      }
      frontmatter {
        title
      }
    }
    vaga: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "postwhat" } } }
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
