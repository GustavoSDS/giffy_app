import React from "react";
import { Route } from "wouter";
import { ListOfGifs } from "../../components/ListOfGifs/ListGifs";
import LazyLoading from '../../components/TrendingSearches/LazyLoading'

import "./Home.css";
import ButtonViewMore from "../../components/Buttons/ButtonViewMore";

const Home = ({ keyword, search }) => {


  return (
    <React.Fragment>
      <h2 className="recents-search-title">recents search</h2>
      <div
        style={{minHeight: '55vh'}}  
      >
        <Route
          path="/"
          component={ListOfGifs}
        />
      </div>

      <ButtonViewMore keyword={keyword} search={search} />

      <Route
        path="/"
        component={LazyLoading}
      />
    </React.Fragment>
  )
}

export default Home