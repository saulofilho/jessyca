import React, { Fragment } from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'
import './SinglePost.css'

export const SinglePostTemplate = ({
  containerOne = [],
  featuredImage,
  header,
  title,
  date,
  body,
  nextPostURL,
  prevPostURL,
  categories = []
}) => (
    <main className="BlogPostPage">
      <article
        className="home-post"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="single-post">
          <div className="SinglePost--InnerContent">
            <div className="post-hero">
              <div className="anchor-back container">
                <Link className="SinglePost--BackButton" to="/blog/">
                  back ←
                </Link>
              </div>
              <div className="SinglePost--Meta container">
                {date && (
                  <time
                    className="default-text-header container"
                    itemProp="dateCreated pubdate datePublished"
                    date={date}
                  >
                    {date}
                  </time>
                )}
                {categories && (
                  <Fragment>
                    {categories.map((cat, index) => (
                      <span
                        key={cat.category}
                        className="SinglePost--Meta--Category"
                      >
                        {cat.category}
                        {/* Add a comma on all but last category */}
                        {index !== categories.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </Fragment>
                )}
              </div>
              <p className="post-text-header container">{header}</p>
              {title && (
                <p className="post-text-title container" itemProp="title">
                  {title}
                </p>
              )}
              <div className="post-img">
                <img src={featuredImage} alt="" />
              </div>
            </div>
            <div className="containerOne" id="containerOne">
              {containerOne.map(item => (
                <>
                  <div className="post-texts container">
                    <Content source={item.textOne} />
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="SinglePost--Pagination">
            <div className="container">
              {prevPostURL && (
                <Link
                  className="SinglePost--Pagination--Link prev"
                  to={prevPostURL}
                >
                  previous news ←
                </Link>
              )}
              {nextPostURL && (
                <>
                  <div className="next">
                    <Link
                      className="SinglePost--Pagination--Link"
                      to={nextPostURL}
                    >
                      next news →
                </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </article>
    </main>
  )

// Export Default SinglePost for front-end
const SinglePost = ({ data: { post, allPosts }, location }) => {
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <Layout
      location={location}
      meta={post.frontmatter.meta || false}
      title={post.frontmatter.title || false}
    >
      <SinglePostTemplate
        {...post}
        {...post.frontmatter}
        body={post.html}
        nextPostURL={_get(thisEdge, 'next.fields.slug')}
        prevPostURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default SinglePost

export const pageQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SinglePost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        containerOne {
          textOne
        }
        featuredImage
        header
        title
        template
        subtitle
        date(formatString: "D.MM.Y")
      }
    }

    allPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            featuredImage
            title
            header
          }
        }
        previous {
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
