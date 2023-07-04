import React, { Suspense } from 'react';
import useNearScreen from '../../hooks/useNearScreen';
import { Loading } from '../Messages/Loading';
import { List } from 'react-content-loader';

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
);

const LazyTranding = () => {
  const { isNearScreen, elementRef } = useNearScreen({ distance: '100px' });

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
export default React.memo(LazyTranding);