import React, { useState } from "react";
import { useLocation } from "wouter";
import ButtonSearchGIF from "../Buttons/ButtonSearchGIF";
import InputSearchGIF from "../Inputs/InputSearchGIF";


import "./Nav.css"

export const Nav = () => {
  // eslint-disable-next-line no-unused-vars
  const [path, pushLocation] = useLocation();
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('gifs');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.length > 0) {
      pushLocation("/" + category + "/" + keyword);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputSearchGIF
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <div className="options-search">
        <select
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          id="category"
        >
          <option value="gifs">Gifs</option>
          <option value="stickers">Stickers</option>
        </select>

        <ButtonSearchGIF />
      </div>
    </form>
  )
}
