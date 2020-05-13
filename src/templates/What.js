import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'
// import WhatCarousel from '../components/WhatCarousel'
import Layout from '../components/Layout'

/**
 * Filter vaga by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {vaga} object
 */
export const byDate = vaga => {
  const now = Date.now()
  return vaga.filter(post => Date.parse(post.date) <= now)
}

/**
 * filter vaga by category.
 *
 * @param {vaga} object
 * @param {title} string
 * @param {contentType} string
 */
export const byCategory = (vaga, title, contentType) => {
  const isCategory = contentType === 'postCategories'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  return isCategory ? vaga.filter(byCategory) : vaga
}

// Export Template for use in CMS preview
export const WhatTemplate = ({
  title,
  vaga = [],
  enableSearch = true,
  contentType
}) => (
    <Location>
      {({ location }) => {
        let filteredPosts = vaga

        filteredPosts = filteredPosts.filter(post =>
          post.frontmatter.title.toLowerCase()
        )

        return (
          <main className="pessoas">
            {/* <section className="pessoas-section">
                <WhatCarousel
                  posts={filteredPosts}
                />
              </section> */}

          </main>
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
      filter: { fields: { contentType: { eq: "postWhat" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
