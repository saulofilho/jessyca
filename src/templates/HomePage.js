import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import Layout from '../components/Layout'
// import CanvasSketch from '../components/CanvasSketch'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Tilt from 'react-tilt'

if (typeof window !== `undefined`) {
  AOS.init()
}

export const HomePageTemplate = ({
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
            <div className="canvas-sketch">
              <div
                className="primary-content container"
              >
                <section className="title-hero">
                  <p>c r e a t i v e</p>
                  <p>Jessyca Silva</p>
                </section>
                <p
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  ☻ Oh, hi. It’s you. ☻
                      <br />
                      Welcome to the incredible
                      <br />
                      world of my crazy mind.
                      <br />
                  <br />
                      Here you will see some really cool stuff
                      <br />
                      that I made through the years.
                      <br />
                  <br />
                      So, take a seat.
                      <br />
                      Let me grab a drink for you,
                      <br />
                      and of course: feel at home.
                      <br />
                  <br />
                  <br />
                  <br />
                  <span>
                    [Just don't put your shoes at the sofa, please]
                      </span>
                </p>
              </div>
            </div>
            {filteredPosts.map(post => (
              <div
                key={post.frontmatter.title}
                className="ideas container"
              >
                <section className="card">
                  <Tilt className="Tilt" options={{ max: 100 }}>
                    <h1
                      className="post-title Tilt-inner"
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
