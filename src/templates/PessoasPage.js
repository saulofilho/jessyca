import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'
import PessoasPageCarousel from '../components/PessoasPageCarousel'
import Layout from '../components/Layout'
import './PessoasPage.css'

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
export const PessoasPageTemplate = ({
  title,
  vaga = [],
  enableSearch = true,
  contentType
}) => (
    <Location>
      {({ location }) => {
        let filteredPosts =
          vaga && !!vaga.length
            ? byCategory(byDate(vaga), title, contentType)
            : []

        let queryObj = location.search.replace('?', '')
        queryObj = qs.parse(queryObj)

        if (enableSearch && queryObj.s) {
          const searchTerm = queryObj.s.toLowerCase()
          filteredPosts = filteredPosts.filter(post =>
            post.frontmatter.title.toLowerCase().includes(searchTerm)
          )
        }

        return (
          <main className="pessoas">
            {!!vaga.length && (
              <section className="pessoas-section">
                <PessoasPageCarousel
                  posts={filteredPosts}
                />
              </section>
            )}
          </main>
        )
      }}
    </Location>
  )

// Export Default PessoasPage for front-end
const PessoasPage = ({ data: { page, vaga, postCategories }, location }) => (
  <Layout
    location={location}
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <PessoasPageTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      vaga={vaga.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
      postCategories={postCategories.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
    />
  </Layout>
)

export default PessoasPage

export const pageQuery = graphql`
  ## Query for PessoasPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query PessoasPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        title
        excerpt
        template
        header
        about
        overview
        LikeToSee
      }
    }

    vaga: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "vaga" } } }
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
            date
            header
            about
            overview
            LikeToSee
          }
        }
      }
    }
    postCategories: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "postCategories" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
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
