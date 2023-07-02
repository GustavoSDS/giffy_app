import React, { Suspense } from 'react';
import useNearScreen from '../../hooks/useNearScreen';
import { Loading } from '../../components/Messages/Loading';
import { List } from 'react-content-loader';

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
);

export default function LazyTranding() {
  const {isNearScreen, elementRef}= useNearScreen({ distance: '100px' });

  return <div ref={elementRef}>
    {
      isNearScreen ?
        <Suspense fallback={<Loading />}>
          <TrendingSearches />
        </Suspense>
        : <List />
    }
  </div>;
}