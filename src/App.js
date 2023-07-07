import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import { GifContextProvider } from "./context/GifContext";
import { Header } from "./components/Header/";
import Detail from "./pages/Detail";
import { Error } from "./components/Messages/Error";

import "./App.css";

function App() {
  return (

    <StaticContext.Provider value={{
      nameGif: 'default',
      type: 'gifs',
    }}>

      <Header />

      <GifContextProvider>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/:type/:keyword/:rating"
          component={SearchResults}
        />
        <Route
          path="/details/:id"
          component={Detail}
        />
        <Route
          path="/404"
          component={Error}
        />

      </GifContextProvider>
    </StaticContext.Provider>
  );
}

export default App;
