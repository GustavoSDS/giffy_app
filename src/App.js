import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import StaticContext from "./context/StaticContext";
import { GifContextProvider } from "./context/GifContext";
import { Header } from "./components/Header/Header";
import Detail from "./pages/Detail/Detail";
import Logo from "./components/Logo/Logo";

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
          path="/:search/:keyword"
          component={SearchResults}
        />

      </GifContextProvider>
    </StaticContext.Provider>
  );
}

export default App;
