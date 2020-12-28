import React from 'react';
import HorizontalList from './HorizontalList';

function Business({data}) {
  return <HorizontalList title={'Business News'} size={22} data={data} />;
}

export default Business;
