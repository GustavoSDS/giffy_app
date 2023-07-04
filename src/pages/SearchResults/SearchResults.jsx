import React, { useCallback, useEffect, useRef } from "react";
import { ListOfGifs } from "../../components/ListOfGifs/ListGifs";
import { Route } from "wouter";
import useNearScreen from "../../hooks/useNearScreen";
import useGifs from "../../hooks/useGifs";
import { throttle } from 'throttle-debounce';

const Index = ({ params }) => {
  const { keyword, search } = params;
  const { loading, setPage } = useGifs({ keyword, search });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  });

  const debounceNextPage = useCallback( // eslint-disable-line
    throttle(300, () => setPage(page => page + 1))
    , []);

  useEffect(() => {
    if (isNearScreen) debounceNextPage();
  }, [debounceNextPage, isNearScreen]);

  return (
    <React.Fragment>
      <div className="App-content">
        <Route
          path="/:search/:keyword"
          component={ListOfGifs}
        />
      </div>
      <div id="visor" ref={externalRef}></div>
    </React.Fragment>
  )
}

export default Index