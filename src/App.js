import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import { GifContextProvider } from "./context/GifContext";
import { Link } from "wouter";
import { Header } from "./components/Header";
import Detail from "./pages/Detail";

import logo from './assets/logo.svg';

import "./App.css";

function App() {
  return (
    <StaticContext.Provider value={{
      nameGif: 'default',
      type: 'gifs',
    }}>

      <Link className="logo-container" to="/">
        <img src={logo} alt="logo" />
        <h1 className="logo">Giffy App</h1>
      </Link>
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
