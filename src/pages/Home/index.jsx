import React from "react";
import { Route } from "wouter";
import { ListOfGifs } from "../../components/ListOfGifs";
import LazyLoading from '../../components/TrendingSearches/LazyLoading'
import ButtonViewMore from "../../components/Buttons/ButtonViewMore";
import { Helmet } from "react-helmet";

import "./Home.css";

const Home = ({ keyword, search }) => {

  return (
    <React.Fragment>
       <Helmet>
         <title>HOME | GIFAY</title>
         <meta name="description" content="Page of Gifs code by for Gustavo Dos Santos" />
       </Helmet>

      <h2 className="recents-search-title">recents search</h2>
      <div
        style={{minHeight: '100vh'}}  
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