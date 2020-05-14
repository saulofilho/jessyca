// import React from 'react'
// import _get from 'lodash/get'
// import { Link, graphql } from 'gatsby'
// import Content from '../components/Content'
// import Layout from '../components/Layout'

// export const PostWhatTemplate = ({
//   title,
// }) => (
//     <main>
//       <h1>teste</h1>
//       <article
//         className="home-vaga"
//         itemScope
//         itemType="http://schema.org/BlogPosting"
//       >
//         <div className="vaga-single">
//           <div className="vaga-hero">
//             <div className="container">
//               <div className="anchor-back">
//                 <Link className="PostWhat--BackButton" to="/pessoas/">
//                   back ←
//                 </Link>
//               </div>
//               <p className="default-text-header ">{header}</p>
//               <p className="default-text-title">
//                 {title}
//               </p>
//               <p className="default-text-sub">{about}</p>
//             </div>
//           </div>
//           <div className="container vaga-text">
//             <p className="default-text-sub vaga-up">Overview</p>
//             <div className="default-text-sub">
//               <Content source={overview} />
//             </div>
//             <p className="default-text-sub vaga-up">What We’d Like To See</p>
//             <div className="default-text-sub">
//               <Content source={LikeToSee} />
//             </div>
//             <div className="default-btn apply-btn">
//               <button>Apply.</button>
//             </div>
//           </div>
//         </div>
//       </article>
//     </main>
//   )

// // Export Default PostWhat for front-end
// const PostWhat = ({ data: { post }, location }) => {
//   return (
//     <Layout
//       location={location}
//       title={post.frontmatter.title || false}
//     >
//       <PostWhatTemplate
//         {...post}
//         {...post.frontmatter}
//         body={post.html}
//       />
//     </Layout>
//   )
// }

// export default PostWhat

// export const pageQuery = graphql`
//   ## Query for PostWhat data
//   ## Use GraphiQL interface (http://localhost:8000/___graphql)
//   ## $id is processed via gatsby-node.js
//   ## query name must be unique to this file
//   query PostWhat($id: String!) {
//     post: markdownRemark(id: { eq: $id }) {
//       html
//       id
//       frontmatter {
//         title
//       }
//     }
//   }
// `
