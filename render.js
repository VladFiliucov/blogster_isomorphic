import express from 'express';

import React from 'react';
import ReactDOM from 'react-dom/server';

import BlogList from './components/containers/BlogList';

const app = express();

const markup = (
  <div>
    <BlogList />
  </div>
);

app.use((req, res) => {
  const html = ReactDOM.renderToString(markup);

  res.end(`
    <!DOCTYPE html>
    <html>
    <head></head>
    <body>
      ${html}
    </body>
    </html>
  `)
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`SERVER LISTENING TO PORT ${PORT}`);
});
