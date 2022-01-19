import React from 'react';
import Error from 'next/error';

const NotFound = () => (
  <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
    <Error statusCode={404} />
  </div>
);

export default NotFound;
