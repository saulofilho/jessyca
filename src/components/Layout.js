import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { withPrefix, StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import HeaderMenu from "./HeaderMenu"
import ChatBot from "./ChatBot"
import Footer from './Footer'
import 'prismjs/themes/prism-okaidia.css'
// import linkedinImg from '/static/images/linkedin.png';
// import sorryImg from '/static/images/sorry.png';
// import underImg from '/static/images/under.png';
// import workerImg from '/static/images/worker.png';

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
              {/* <div className="under-construction">
              <img src={workerImg} className="worker-img" alt="Worker" />
              <img src={underImg} className="under-img" alt="Under Construction" />
              <img src={sorryImg} className="sorry0img" alt="Sorry" />
              <a href="https://www.linkedin.com/in/jessycasilva/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinImg} className="linkedin-img" alt="LinkedIn" />
              </a>
              </div> */}
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
