import React from "react";
import Gif from "../../components/Gif/Gif";
import { useGlobalGifs } from "../../hooks/useGlobalGifs"

import "./Detail.css"

const Index = ({ params }) => { 
  const gifs = useGlobalGifs()
  const gif = gifs.find(gif => gif.id === params.id) || {}

  return (
    <div className="App-content--detail">
      <Gif
        {...gif}
      />
    </div>
  )
}

export default Index