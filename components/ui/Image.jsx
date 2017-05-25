import React from 'react';

const Image = (props) => (
  <div>
     <img
      src={props.blogEntry.src}
      style={props.style}
      alt={props.blogEntry.alt}
     />
  </div>
)

export default Image;
