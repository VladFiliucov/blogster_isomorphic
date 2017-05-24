import React, { Component } from 'react';

import BlogList from '../ui/BlogList';

const blogEntries = [
  {
    id: 1,
    image: "pictures/picture1.jpg",
    altText: "Who cares",
    text: "This is an awesome blogpost 1"
  },

  {
    id: 2,
    image: "pictures/picture2.jpg",
    altText: "Who cares",
    text: "This is an awesome blogpost 2"
  },

  {
    id: 3,
    image: "pictures/picture3.jpg",
    altText: "Who cares",
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

