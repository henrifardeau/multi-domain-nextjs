import React from 'react';
import PropTypes from 'prop-types';

const Index = ({ host }) => <h1>Hello {host}</h1>;

Index.propTypes = {
  host: PropTypes.string.isRequired,
};

export const getServerSideProps = async ({ req, res }) => {
  const host = req.headers.host.split('.')[0];

  res.setHeader('Cache-Control', 'public, s-maxage=1, stale-while-revalidate=59');
  return { props: { host } };
};

export default Index;
