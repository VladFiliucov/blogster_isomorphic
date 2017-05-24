import React, { Component } from 'react';

import BlogItem from './BlogItem';

const style = {width: 200, height: 200}

class BlogList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { blogEntries } = this.props
    console.log(blogEntries);

    return (
      <div>
        {
          blogEntries.map(blogEntry => {
            return <BlogItem
              imageURL={blogEntry.image}
              style={style}
              altText={blogEntry.altText}
              text={blogEntry.text} />
          })
        }
      </div>
    );
  }
}

export default BlogList;
