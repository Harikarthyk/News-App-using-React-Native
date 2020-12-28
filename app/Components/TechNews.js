import React from 'react';
import HorizontalList from './HorizontalList';

function TechNews({data}) {
  return <HorizontalList size={22} title={'Tech News'} data={data} />;
}

export default TechNews;
