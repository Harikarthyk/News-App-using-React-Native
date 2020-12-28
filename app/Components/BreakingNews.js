import React from 'react';
import HorizontalList from './HorizontalList';

function BreakingNews({data}) {
  return <HorizontalList title={'Top Headlines'} size={27} data={data} />;
}

export default BreakingNews;
