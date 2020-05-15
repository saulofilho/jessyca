import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import Layout from '../components/Layout'
import AOS from 'aos'
import 'aos/dist/aos.css'

if (typeof window !== `undefined`) {
  AOS.init()
}

export const HomePageTemplate = ({
  featuredimage,
  cases = []
}) => (
    <Location>
      {() => {
        let filteredPosts = cases

        filteredPosts = filteredPosts.filter(post =>
          post.frontmatter.title.toLowerCase()
        )

        return (
          <>
            {filteredPosts.map(post => (
              <div key={post.title}>
                <div 
                  className="hero-header"
                  style={{
                    backgroundImage: `url(${featuredimage})`
                  }}
                >
                  <div
                    className="primary-content container"
                  >
                    <p
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      Oh, hi. It’s you.☺
                      Welcome to the incredible world of my crazy mind.
                    <br />
                      <br />
                      Here you will see some really cool stuff that I made through the years.
                    <br />
                      So, take a seat.
                    <br />
                      Let me grab a drink for you, and of course: feel at home.
                    <br />
                      [Just don't put your shoes at the sofa, please]
                    </p>
                  </div>
                </div>
                <div className="ideas container">
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
                </div>
              </div>
            ))}
          </>
        )
      }}
    </Location>
  )

// Export Default HomePage for front-end
const HomePage = ({ data: { page, cases }, location }) => (
  <Layout
    location={location}
    title={page.frontmatter.title || false}
  >
    <HomePageTemplate
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
        featuredimage
      }
    }
    cases: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posthome" } } }
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
