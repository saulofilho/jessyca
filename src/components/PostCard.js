import React from 'react'
import { Link } from 'gatsby'

import Image from './Image'
import './PostCard.css'

const PostCard = ({
  featuredImage,
  date,
  title,
  excerpt,
  slug,
  categories = [],
  className = '',
  ...props
}) => (
  <div className="single-post">
    <Link to={slug}>
      <div className={`PostCard ${className}`}>
        <div className="PostCard--Content">
          <p className="PostCard--Date">{date}</p>
          {title && <p className="PostCard--Title">{title}</p>}
        </div>
        {featuredImage && (
          <div className="PostCard--Image relative">
            <Image background src={featuredImage} alt={title} />
          </div>
        )}
      </div>
    </Link>
  </div>
)

export default PostCard
