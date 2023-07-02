import React from "react";
import { Route } from "wouter";
import { ListOfGifs } from "../../components/ListOfGifs";
import LazyLoading from '../../components/TrendingSearches'

import "./Home.css";
import useGifs from "../../hooks/useGifs";

const index = ({ keyword, search }) => {
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
      {
        gifs.length > 0
        && <button className="ListOfGifs-button" onClick={handleNextPage}>View more </button>
      }
      <div className="App-content">
        <Route
          path="/"
          component={LazyLoading}
        />
      </div>
    </React.Fragment>
  )
}

export default index