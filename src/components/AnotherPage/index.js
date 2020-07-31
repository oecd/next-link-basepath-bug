import React from 'react';

const AnotherPage = ({ title }) => (
  <>
    <div>{title}</div>
    <div>
      this page has been fully loaded since next.js has tried to fetch from
      _next/data/xxxxxx/folder/another-page.json
      whereas SSG has generated this file under
      _next/data/xxxxxx/another-page.json
    </div>
  </>
);

export default AnotherPage;
