import React from "react";
import { Route } from "wouter";
import ListOfGifs  from "../../components/ListOfGifs";
import LazyLoading from '../../components/TrendingSearches/LazyLoading'
import ButtonViewMore from "../../components/Buttons/ButtonViewMore";
import { Helmet } from "react-helmet";

import "./Home.css";

const Home = ({ keyword, type }) => {

  return (
    <>
      <Helmet>
        <title>HOME | GIFAY</title>
        <meta name="description" content="Page of Gifs code by for Gustavo Dos Santos" />
        <link rel="canonical" href="https://gifay-gsds.vercel.app" />
      </Helmet>

      <h2 className="recents-search-title">recents search</h2>

      <div style={{ minHeight: '100vh' }}>
        <Route path="/" component={ListOfGifs} />
      </div>

      <ButtonViewMore keyword={keyword} search={type} />

      <Route path="/" component={LazyLoading} />

    </>
  )
}

export default Home