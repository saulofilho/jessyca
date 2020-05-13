import React from 'react'
import { Link } from 'gatsby'

import './CaseCard.css'

const CaseCard = ({
  featuredImage,
  NossosCasesAbout,
  NossosCasesTitle,
  title,
  slug,
  className = ''
}) => (
  <Link to={slug} className={`CaseCard ${className}`}>
    {featuredImage && (
      <div 
        className="CaseCard--Image relative"
        style={{
          backgroundImage: `url(${featuredImage})`
        }}
      >
        <div className="case-card-flex">
          <div className="case-card-top">
            <p className="default-text-title container">{NossosCasesTitle}</p>
            <p className="default-text-sub container">{NossosCasesAbout}</p>
          </div>
          <div className="case-card-down">
            <p className="default-text-sub container">ver mais</p>
          </div>
        </div>
      </div>
    )}
  </Link>
)

export default CaseCard
