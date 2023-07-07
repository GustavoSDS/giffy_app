import React, { useReducer } from "react";
import { useLocation } from "wouter";
import ButtonSearchGIF from "../Buttons/ButtonSearchGIF";
import InputSearchGIF from "../Inputs/InputSearchGIF";
import SelectRating from "../Inputs/SelectRating";
import SelectTypeSearch from "../Inputs/SelectTypeSearch";

import "./FormSearch.css"

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_KEYWORD': return { ...state, keyword: action.payload }
    case 'SET_RATING': return { ...state, rating: action.payload }
    case 'SET_CATEGORY': return { ...state, category: action.payload }

    default: throw new Error(`Action type ${action.type} not found`);
  }
}

export const FormSearch = () => {
  const [path, pushLocation] = useLocation(); // eslint-disable-line

  const [state, dispatch] = useReducer(reducer, {
    keyword: '',
    rating: RATINGS[0],
    category: 'gifs'
  });
  const { keyword, rating, category } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.length > 0) {
      pushLocation("/" + category + "/" + keyword + "/" + rating);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputSearchGIF
        keyword={keyword}
        dispatch={dispatch}
      />
      <div className="options-search">
        <ButtonSearchGIF />

        <SelectTypeSearch
          category={category}
          dispatch={dispatch}
        />
        <SelectRating
          RATINGS={RATINGS}
          rating={rating}
          dispatch={dispatch}
        />
      </div>

    </form>
  )
}

export default React.memo(FormSearch)
