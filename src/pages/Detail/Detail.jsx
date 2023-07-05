import React from "react";
import { useGlobalGifs } from "../../hooks/useGlobalGifs"

import "./Detail.css"
import GifDeatil from "../../components/Gif/GifDeatil";

const Index = ({ params }) => { 
  const gifs = useGlobalGifs()
  const gif = gifs.find(gif => gif.id === params.id) || {}

  return (
    <div className="App-content--detail">
      <GifDeatil
        {...gif}
      />
    </div>
  )
}

export default Index