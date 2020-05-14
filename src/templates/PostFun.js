// import React, { Fragment } from 'react'
// import _get from 'lodash/get'
// import { Link, graphql } from 'gatsby'

// import Content from '../components/Content'
// import Layout from '../components/Layout'

// export const PostFunTemplate = ({
//   title,
// }) => (
//     <main className="PostFunPage">
//       <article
//         className="home-case"
//         itemScope
//         itemType="http://schema.org/BlogPosting"
//       >
//         <div className="single-case">
//           <div className="PostFun--Meta">
//             {categories && (
//               <Fragment>
//                 {categories.map((cat, index) => (
//                   <span
//                     key={cat.category}
//                     className="PostFun--Meta--Category"
//                   >
//                     {cat.category}
//                     {index !== categories.length - 1 ? ',' : ''}
//                   </span>
//                 ))}
//               </Fragment>
//             )}
//           </div>
//           <div className="PostFun--InnerContent">
//             <div className="case-hero container">
//               <p className="default-text-header">{header}</p>
//               {title && (
//                 <p className="default-text-title" itemProp="title">
//                   {title}
//                 </p>
//               )}
//               <p className="default-text-sub">{hero}</p>
//                 <div className="anchor-down">
//                   <a href="#containerOne">
//                     ↓
//                   </a>
//                 </div>
//             </div>
//             <div className="containerOne" id="containerOne">
//               {containerOne.map(item => (
//                 <>
//                   <div className="case-imgs">
//                     <img src={item.imageOne} alt="" />
//                   </div>
//                   <div className="case-texts container">
//                     <p className="default-text-h2">{item.titleOne}</p>
//                     <Content source={item.textOne} />
//                   </div>
//                 </>
//               ))}
//             </div>
//             <div className="containerTwo" id="containerTwo">
//               {containerTwo.map(item => (
//                 <>
//                   <div className="case-imgs">
//                     <img src={item.imageTwo} alt="" />
//                   </div>
//                   <div className="case-texts container">
//                     <p className="default-text-h2">{item.titleTwo}</p>
//                     <Content source={item.textTwo} />
//                   </div>
//                 </>
//               ))}
//             </div>
//             <div className="containerThree" id="containerThree">
//               {containerThree.map(item => (
//                 <>
//                   <div className="case-imgs">
//                     <img src={item.imageThree} alt="" />
//                   </div>
//                   <div className="case-texts container">
//                     <p className="default-text-h2">{item.titleThree}</p>
//                     <Content source={item.textThree} />
//                   </div>
//                 </>
//               ))}
//             </div>
//             <div className="resultados container">
//               <Content source={body} />
//             </div>
//           </div>
//           <div className="PostFun--Pagination">
//             <div className="container">
//               {prevPostURL && (
//                 <Link
//                   className="PostFun--Pagination--Link prev"
//                   to={prevPostURL}
//                 >
//                   ANTERIOR ‹
//                 </Link>
//               )}
//               {nextPostURL && (
//                 <>
//                   <div className="next">
//                     <Link
//                       className="PostFun--Pagination--Link next"
//                       to={nextPostURL}
//                     >
//                       › PRÓXIMO
//                     </Link>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </article>
//     </main>
//   )

// // Export Default PostFun for front-end
// const PostFun = ({ data: { post, allPosts }, location }) => {
//   const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
//   return (
//     <Layout
//       location={location}
//       title={post.frontmatter.title || false}
//     >
//       <PostFunTemplate
//         {...post}
//         {...post.frontmatter}
//         body={post.html}
//       />
//     </Layout>
//   )
// }

// export default PostFun

// export const pageQuery = graphql`
//   ## Query for PostFun data
//   ## Use GraphiQL interface (http://localhost:8000/___graphql)
//   ## $id is processed via gatsby-node.js
//   ## query name must be unique to this file
//   query PostFun($id: String!) {
//     post: markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//       }
//     }

//     allPosts: allMarkdownRemark(
//       filter: { fields: { contentType: { eq: "postFun" } } }
//       sort: { order: DESC, fields: [frontmatter___title] }
//     ) {
//       edges {
//         node {
//           id
//         }
//       }
//     }
//   }
// `