import React, { Component } from 'react';

import BlogList from '../ui/BlogList';

const blogEntries = [
  {
    id: 1,
    src: "pictures/picture1.jpg",
    alt: "Who cares",
    text: "This is an awesome blogpost 1"
  },

  {
    id: 2,
    src: "pictures/picture2.jpg",
    alt: "Who cares",
    text: "This is an awesome blogpost 2"
  },

  {
    id: 3,
    src: "pictures/picture3.jpg",
    alt: "Who cares",
    text: "This is an awesome blogpost 3"
  }
]

export default class BlogPage extends Component {
  render() {
    return (
      <BlogList blogEntries={blogEntries} />
    );
  }
}

