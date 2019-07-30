import React from 'react';

const StaticPage = () => {
  return <div>Static</div>;
};

StaticPage.getInitialProps = async ctx => {
  console.log('in static page');
  return {};
};

export default StaticPage;
