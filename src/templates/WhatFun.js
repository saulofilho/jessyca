import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'
import CaseSection from '../components/CaseSection'
import Layout from '../components/Layout'

/**
 * Filter cases by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {cases} object
 */
export const byDate = cases => {
  const now = Date.now()
  return cases.filter(post => Date.parse(post.date) <= now)
}

/**
 * filter cases by category.
 *
 * @param {cases} object
 * @param {title} string
 * @param {contentType} string
 */
export const byCategory = (cases, title, contentType) => {
  const isCategory = contentType === 'postCategories'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  return isCategory ? cases.filter(byCategory) : cases
}

// Export Template for use in CMS preview
export const WhatFunTemplate = ({
  title,
  cases = [],
  enableSearch = true,
  contentType
}) => (
    <Location>
      {({ location }) => {
        let filteredPosts =
          cases && !!cases.length
            ? byCategory(byDate(cases), title, contentType)
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
          <main className="projeto">
            {/* <div className="sobre-car-vert-nos-somos">
              <div className="default-flex">
                <p className="default-text-header container">projetos</p>
                <p className="default-text-title container">nossos cases</p>
                <p className="default-text-sub container">
                  Somos uma agência mais que digital, com foco em experiências
                  e resultados.
                  Nesses mais de 10 anos de marketing, criatividade e tecnologia
                  pensamos e executamos ações completas.
                  <br />
                  <br />
                  Veja nossos cases:
                </p>
                <div className="container">
                  <div className="anchor-down">
                    <a href="#projeto-section">
                      ↓
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {!!cases.length && (
              <section className="projeto-section" id="projeto-section">
                <CaseSection posts={filteredPosts} />
              </section>
            )}
            <div className="sobre-car-vert-nos-somos">
              <div className="default-flex">
                <p className="default-text-title container">nossos clientes</p>
                <div className="nossos-clientes-logos container">
                  nossos clientes logos
                </div>
              </div>
            </div> */}
          </main>
        )
      }}
    </Location>
  )

// Export Default WhatFun for front-end
const WhatFun = ({ data: { page, cases, postCategories }, location }) => (
  <Layout
    location={location}
    title={page.frontmatter.title || false}
  >
    <WhatFunTemplate
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

    cases: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "postFun" } } }
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
