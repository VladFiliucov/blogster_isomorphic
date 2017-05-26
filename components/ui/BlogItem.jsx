import React from 'react';

import Image from './Image';
import TextBox from './TextBox';

const BlogItem = (props) => (
  <div>
    <Image {...props} />
    <TextBox>{props.blogEntry.text}</TextBox>
  </div>
)

export default BlogItem;
