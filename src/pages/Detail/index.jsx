import React from "react";
import { Gif } from "../../components/Gif";
import { useGlobalGifs } from "../../hooks/useGlobalGifs"

import "./Detail.css"

const index = ({ params }) => { /* eslint-disable-line  */
  const gifs = useGlobalGifs() /* eslint-disable-line */
  const gif = gifs.find(gif => gif.id === params.id) || {}

  return (
    <div className="App-content--detail">
      <Gif
        {...gif}
      />
    </div>
  )
}

export default index