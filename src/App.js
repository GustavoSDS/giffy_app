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

function App() {
  return (
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
  );
}

export default App;
