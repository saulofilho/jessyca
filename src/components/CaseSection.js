import React from 'react'

import CaseCard from './CaseCard'
import './CaseSection.css'

class CaseSection extends React.Component {
  static defaultProps = {
    posts: []
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () =>
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))

  render() {
    const { posts } = this.props,
      { limit } = this.state,
      visiblePosts = posts.slice(0, limit || posts.length)

    return (
      <div className="CaseSection">
        {!!visiblePosts.length && (
          <div className="CaseSection--Grid">
            {visiblePosts.map((post, index) => (
              <CaseCard key={post.title + index} {...post} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default CaseSection
