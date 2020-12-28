import React from 'react';
import BlockCard from './BlockCard';

function FeaturedNews({item}) {
  return <BlockCard style={{marginVertical: 20}} item={item} />;
}

export default FeaturedNews;
