import React from 'react';
import Link from 'next/link';

const HomePage = ({ title }) => (
  <>
    <div>{title}</div>
    <Link href="/[...slug]" as="/another-page">
      <a>go to another page..</a>
    </Link>
  </>
);

export default HomePage;
