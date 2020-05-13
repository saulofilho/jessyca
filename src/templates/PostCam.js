import React, { Fragment } from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'

export const PostCamTemplate = ({
  title,
}) => (
    <main className="BlogPostPage">
      <h1>{title}</h1>
      {/* <article
        className="home-post"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="single-post">
          <div className="PostCam--InnerContent">
            <div className="post-hero">
              <div className="anchor-back container">
                <Link className="PostCam--BackButton" to="/blog/">
                  back ←
                </Link>
              </div>
              <div className="PostCam--Meta container">
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
                        className="PostCam--Meta--Category"
                      >
                        {cat.category}
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
          <div className="PostCam--Pagination">
            <div className="container">
              {prevPostURL && (
                <Link
                  className="PostCam--Pagination--Link prev"
                  to={prevPostURL}
                >
                  previous news ←
                </Link>
              )}
              {nextPostURL && (
                <>
                  <div className="next">
                    <Link
                      className="PostCam--Pagination--Link"
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
      </article> */}
    </main>
  )

// Export Default PostCam for front-end
const PostCam = ({ data: { post }, location }) => {
  return (
    <Layout
      location={location}
      title={post.frontmatter.title || false}
    >
      <PostCamTemplate
        {...post}
        {...post.frontmatter}
        body={post.html}
      />
    </Layout>
  )
}

export default PostCam

export const pageQuery = graphql`
  ## Query for PostCam data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query PostCam($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        title
      }
    }
  }
`