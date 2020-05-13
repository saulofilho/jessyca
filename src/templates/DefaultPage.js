import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import SVGIcon from '../components/SVGIcon'

// Export Template for use in CMS preview
export const DefaultPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body
}) => (
  <main className="DefaultPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
        <SVGIcon src="/images/calendar.svg" />
      </div>
    </section>
  </main>
)

const DefaultPage = ({ data: { page }, location }) => (
  <Layout
    location={location}
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <DefaultPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default DefaultPage

export const pageQuery = graphql`
  query DefaultPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`






// sobre-page layout
// import React from 'react'
// import { graphql } from 'gatsby'
// import Footer from '../components/Footer'

// import PageHeader from '../components/PageHeader'
// import Content from '../components/Content.js'
// import Layout from '../components/Layout.js'
// // import Accordion from '../components/Accordion'
// // import BackgroundVideo from '../components/BackgroundVideo'
// // import Gallery from '../components/Gallery'
// // import Popup from '../components/Popup'

// // Export Template for use in CMS preview
// export const ComponentsPageTemplate = ({
//   title,
//   subtitle,
//   subtitle2,
//   featuredImage,
//   featuredImage2,
//   section1,
//   section2,
//   video,
//   videoPoster,
//   videoTitle,
//   accordion,
//   body,
//   gallery
// }) => (
//   <main>
//     <PageHeader
//       title={title}
//       subtitle={subtitle}
//       backgroundImage={featuredImage}
//     />
//     <section className="section">
//       <div className="container">
//         <Content source={section1} />
//       </div>
//     </section>

//     <section className="section">
//       <div className="container">
//         <h2>Our gallery component</h2>
//         <Gallery images={gallery} />
//       </div>
//     </section>

//     <PageHeader
//       title={title}
//       subtitle={subtitle2}
//       backgroundImage={featuredImage2}
//     />

//     <section className="section">
//       <div className="container">
//         <Content source={section2} />
//       </div>
//     </section>

//     <section className="BackgroundVideo-section section">
//       <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
//         {video && <source src={video} type="video/mp4" />}
//       </BackgroundVideo>
//     </section>

//     <section className="section">
//       <div className="container">
//         <Accordion items={accordion} />
//       </div>
//     </section>

//     <section className="section">
//       <div className="container">
//         <Popup>
//           <Content source={section1} />
//         </Popup>
//       </div>
//     </section>

    
//   </main>
// )

// const SobrePage = ({ data: { page }, location }) => (
//   <Layout
//     location={location}
//     meta={page.frontmatter.meta || false}
//     title={page.frontmatter.title || false}
//   >
//     <ComponentsPageTemplate {...page} {...page.frontmatter} body={page.html} />
//   </Layout>
// )

// export default SobrePage

// export const pageQuery = graphql`
//   query SobrePage($id: String!) {
//     page: markdownRemark(id: { eq: $id }) {
//       ...Meta
//       ...Gallery
//       html
//       frontmatter {
//         title
//         template
//         subtitle
//         subtitle2
//         featuredImage
//         featuredImage2
//         section1
//         section2
//         video
//         videoPoster
//         videoTitle
//         accordion {
//           title
//           description
//         }
//       }
//     }
//   }
// `
