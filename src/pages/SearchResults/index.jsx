import React, { useCallback, useEffect, useRef } from "react";
import { ListOfGifs } from "../../components/ListOfGifs";
import { Route } from "wouter";
import useNearScreen from "../../hooks/useNearScreen";
import useGifs from "../../hooks/useGifs";
import { throttle } from 'throttle-debounce';
import { Helmet } from "react-helmet";


const Index = ({ params }) => {
  const { keyword, search } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, search });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  });
  
  const title = gifs
    ? `${gifs.length} ${search} of ${keyword} found`
    : loading
      ? `Cargando ${search} - ${keyword}`
      : 'gifs no encontrados';

  const debounceNextPage = useCallback( // eslint-disable-line
    throttle(300, () => setPage(page => page + 1))
    , []);

  useEffect(() => {
    if (isNearScreen) debounceNextPage();
  }, [debounceNextPage, isNearScreen]);

  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | GIFAY</title>
        <meta name="description" content={title} />
        <link rel="canonical" href="https://gifay-gsds.vercel.app/gifs/avengers" />
      </Helmet>

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