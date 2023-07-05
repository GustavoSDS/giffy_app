import React, { useCallback, useEffect, useRef } from "react";
import { ListOfGifs } from "../../components/ListOfGifs";
import { Route } from "wouter";
import useNearScreen from "../../hooks/useNearScreen";
import useGifs from "../../hooks/useGifs";
import { throttle } from 'throttle-debounce';
import useTitle from "../../hooks/useSEO";

const Index = ({ params }) => {
  const { keyword, search } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, search });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  });
  const typeSearch = search.charAt(0).toUpperCase() + search.slice(1);
  const title = gifs
    ? `${gifs.length} ${typeSearch} - ${keyword}`
    : loading
      ? `Cargando ${typeSearch} - ${keyword}`
      : '';

  useTitle({ title })

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