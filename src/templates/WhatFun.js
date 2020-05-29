import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import Layout from '../components/Layout'
import Tilt from 'react-tilt'

export const byDate = postfunPost => {
  const now = Date.now()
  return postfunPost.filter(post => Date.parse(post.date) <= now)
}

export const WhatFunTemplate = ({
  postfunPost = []
}) => (
    <Location>
      {() => {
        let filteredPosts = byDate(postfunPost)

        filteredPosts = filteredPosts.filter(post =>
          post.frontmatter.title.toLowerCase()
        )

        return (
          <div className="ideas container fun">
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

// Export Default WhatFun for front-end
const WhatFun = ({ data: { page, postfunPost }, location }) => (
  <Layout
    location={location}
    title={page.frontmatter.title || false}
  >
    <WhatFunTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      postfunPost={postfunPost.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
    />
  </Layout>
)

export default WhatFun

export const pageQuery = graphql`
  ## Query for WhatFun data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query WhatFun($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        contentType
      }
      frontmatter {
        title
      }
    }
    postfunPost: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "postfun" } } }
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
