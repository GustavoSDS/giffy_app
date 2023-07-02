import React from "react";
import { useLocation } from "wouter"

import "./Nav.css"
import { useState } from "react";

export const Nav = () => { // eslint-disable-line
  const [path, pushLocation] = useLocation(); // eslint-disable-line
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
      <input
        type="text"
        value={keyword}
        onChange={(e) => { setKeyword(e.target.value) }}
        placeholder="Search GIF"
      />
      <select
        onChange={(e) => setCategory(e.target.value)}
        name="category"
        id="category"
      >
        <option value="gifs">Gifs</option>
        <option value="stickers">Stickers</option>
      </select>

      <button
        type="submit"
        className="search-button"
      >
        Search GIF
      </button>
    </form>
  )
}
