import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import { GifContextProvider } from "./context/GifContext";
import { Header } from "./components/Header/";
import Detail from "./pages/Detail";
import Logo from "./components/Logo";
import { Error } from "./components/Messages/Error";

import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>GIFAY</title>
        <meta name="description" content="GIFAY is a GIF search engine" />
        <meta name="keywords" content="gif, search, engine, app, stickers" />
        <meta name="author" content="Gustavo S. Dos Santos" />
        <meta name="application-name" content="GIFAY" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#4285f4" />
        <meta name="rating" content="General" />
      </Helmet>

      <StaticContext.Provider value={{
        nameGif: 'default',
        type: 'gifs',
      }}>

        <Logo />
        <Header />

        <GifContextProvider>
          <Route
            path="/"
            component={Home}
          />
          <Route
            path="/details/gif/:id"
            component={Detail}
          />
          <Route
            path="/404"
            component={Error}
          />
          <Route
            path="/:search/:keyword"
            component={SearchResults}
          />

        </GifContextProvider>
      </StaticContext.Provider>
    </>
  );
}

export default App;
