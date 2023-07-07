import React, { Suspense } from 'react';
import useNearScreen from '../../hooks/useNearScreen';
import { Loading } from '../Messages/Loading';

const TrendingSearches = React.lazy(
  () => import('.')
);

const LazyTranding = () => {
  const { isNearScreen, elementRef } = useNearScreen({ distance: '100px' });

  return <div ref={elementRef}>
    {
      isNearScreen ?
        <Suspense fallback={<Loading />}>
          <TrendingSearches />
        </Suspense>
        : <Loading />
    }
  </div>;
}
export default React.memo(LazyTranding);