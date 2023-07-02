import React from "react";
import { Route } from "wouter";
import { ListOfGifs } from "../../components/ListOfGifs";
import LazyLoading from '../../components/TrendingSearches'
import useGifs from "../../hooks/useGifs";

import "./Home.css";

const Index = ({ keyword, search }) => {
  const { gifs, setPage } = useGifs({ keyword, search });

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <React.Fragment>

      <h2 className="recents-search-title">recents search</h2>
      <div className="list-of-gifs">
        <Route
          path="/"
          component={ListOfGifs}
        />
      </div>
      {gifs.length === 0 && localStorage.setItem('lastKeyword', 'random')}
      {gifs.length > 0
        && <button className="ListOfGifs-button" onClick={handleNextPage}>
          View more </button>}

      <div className="trending-searches">
        <Route
          path="/"
          component={LazyLoading}
        />
      </div>
    </React.Fragment>
  )
}

export default Index