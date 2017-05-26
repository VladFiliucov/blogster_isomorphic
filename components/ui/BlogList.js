import React, { Component } from 'react';

import BlogItem from './BlogItem';

const style = {width: 200, height: 200}

class BlogList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { blogEntries } = this.props

    return (
      <div>
        {
          blogEntries.map(blogEntry => {

            return <BlogItem key={blogEntry.id} blogEntry={blogEntry} style={style} />
          })
        }
      </div>
    );
  }
}

export default BlogList;
