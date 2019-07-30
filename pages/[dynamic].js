import React from 'react';

const DynamicPage = () => {
  return <div>Dynamic</div>;
};

DynamicPage.getInitialProps = async ctx => {
  console.log('in dynamic page');
  return {};
};

export default DynamicPage;
