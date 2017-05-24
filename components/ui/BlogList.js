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
            const {id, image, altText, text} = blogEntry

            return <BlogItem key={id} imageURL={image} style={style} altText={altText} text={text} />
          })
        }
      </div>
    );
  }
}

export default BlogList;
