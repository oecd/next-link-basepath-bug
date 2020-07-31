import React from 'react';
import PropTypes from 'prop-types';

import HomePage from '../components/HomePage';
import AnotherPage from '../components/AnotherPage';

const componentBySlug = { home: HomePage, 'another-page': AnotherPage };

const getComponentBySlugPage = (slugPage) => componentBySlug[slugPage];

const Slug = ({ slug }) => {
  const slugPage = slug[slug.length - 1];
  const Component = getComponentBySlugPage(slugPage);
  return Component ? <Component title={slugPage} /> : null;
};

Slug.propTypes = {
  slug: PropTypes.array.isRequired,
};

export default Slug;

// SSG
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ['home'] } },
      { params: { slug: ['another-page'] } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}
