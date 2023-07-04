import React from "react";
import { useState } from "react";
import { createContext } from "react";

const GifContext = createContext({});

export function GifContextProvider ({ children }) {

  const [gifs, setGifs] = useState([]);

  return (
    <GifContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifContext.Provider>
  )

}

export default GifContext
