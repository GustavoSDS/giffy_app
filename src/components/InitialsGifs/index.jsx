import React from "react";
import { Link } from 'wouter'

import './InitialsGifs.css'

export const InitialsGifs = () => {
  return (
    <React.Fragment>
      <div className='initials-gifs'>
        <Link to="/gifs/cats">Gif the cats</Link>
        <Link to="/gifs/dogs">Gif the dogs</Link>
        <Link to="/gifs/birds">Gif the birds</Link>
        <Link to="/gifs/funny">Gif the funny</Link>
        <Link to="/gifs/sports">Gif the sports</Link>
        <Link to="/gifs/animals">Gifs the animals</Link>
        <Link to="/gifs/food">Stickers the food</Link>
      </div>
    </React.Fragment>
  )
}
