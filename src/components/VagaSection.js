import React from 'react'

import CaseCard from './CaseCard'
import './CaseSection.css'

class VagaSection extends React.Component {
  static defaultProps = {
    posts: [],
    title: '',
    limit: 12,
    showLoadMore: true,
    loadMoreTitle: 'Mais',
    perPageLimit: 12
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () =>
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))

  render() {
    const { posts, title, showLoadMore, loadMoreTitle } = this.props,
      { limit } = this.state,
      visiblePosts = posts.slice(0, limit || posts.length)

    return (
      <div className="CaseSection">
        {title && <h2 className="CaseSection--Title">{title}</h2>}
        {!!visiblePosts.length && (
          <div className="CaseSection--Grid">
            {visiblePosts.map((post, index) => (
              <CaseCard key={post.title + index} {...post} />
            ))}
          </div>
        )}
        {showLoadMore && visiblePosts.length < posts.length && (
          <div className="taCenter">
            <button className="button" onClick={this.increaseLimit}>
              {loadMoreTitle}
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default VagaSection
