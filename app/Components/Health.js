import React from 'react';
import HorizontalList from './HorizontalList';

function Health({data}) {
  return <HorizontalList title={'Health News'} size={22} data={data} />;
}

export default Health;
