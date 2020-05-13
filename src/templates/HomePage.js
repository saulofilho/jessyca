import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'
import AOS from 'aos'
import 'aos/dist/aos.css'

if (typeof window !== `undefined`) {
  AOS.init()
}

// import HomeCarousel from '../components/HomeCarousel'
import Layout from '../components/Layout'

/**
 * Filter postHome by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {postHome} object
 */
export const byDate = postHome => {
  const now = Date.now()
  return postHome.filter(post => Date.parse(post.date) <= now)
}

/**
 * filter postHome by category.
 *
 * @param {postHome} object
 * @param {title} string
 * @param {contentType} string
 */
export const byCategory = (postHome, title, contentType) => {
  const isCategory = contentType === 'postCategories'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  return isCategory ? postHome.filter(byCategory) : postHome
}

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  title,
  postHome = [],
  enableSearch = true,
  contentType
}) => (
  <Location>
    {({ location }) => {
      let filteredPosts =
        postHome && !!postHome.length
          ? byCategory(byDate(postHome), title, contentType)
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
        <main className="homePage">
            <section className="homePage-section">
      <h1>{title}</h1>
      {console.log('xxxxx', filteredPosts)}
            </section>
        </main>
      )
    }}
  </Location>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page, postHome }, location }) => (
  <Layout
    location={location}
    title={page.frontmatter.title || false}
  >
    <HomePageTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      postHome={postHome.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
    />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        contentType
      }
      frontmatter {
        title
      }
    }

    postHome: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "postHome" } } }
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
