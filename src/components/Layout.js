import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { withPrefix, StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import HeaderMenu from "./HeaderMenu"
import ChatBot from "./ChatBot"
import Footer from './Footer'
import 'prismjs/themes/prism-okaidia.css'

export default ({ children, meta, title, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            siteTitle
            siteDescription
            googleTrackingId
            socialMediaCard {
              image
            }
          }
        }
      `}
      render={data => {
        const { siteTitle, socialMediaCard, googleTrackingId } = data.settingsYaml

        return (
          <Fragment>
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`%s | ${siteTitle}`}
            >
              {title}
              <link href="https://ucarecdn.com" rel="preconnect" crossorigin />
              <link rel="dns-prefetch" href="https://ucarecdn.com" />
              <script async defer src={withPrefix('script.js')} type="text/javascript" />
            </Helmet>

            <Meta
              googleTrackingId={googleTrackingId}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                socialMediaCard.image
              }
              {...meta}
              {...data.settingsYaml}
            />
            <div className="site-wrapper">
              <HeaderMenu />
              <Fragment>
                {children}
              </Fragment>
              <ChatBot />
              <Footer />
            </div>
          </Fragment>
        )
      }}
    />
  )
}
