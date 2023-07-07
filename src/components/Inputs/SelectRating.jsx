import React from 'react'

const SelectRating = ({ RATINGS, dispatch, rating }) => {
  return (
    <select
      onChange={(e) => dispatch({ type: 'SET_RATING', payload: e.target.value })}
      name="rating"
      id="rating"
      value={rating}
    >
      <option disabled>Rating</option>
      {RATINGS.map((rating) => <option value={rating} key={rating}>{rating}</option>)}
    </select>
  )
}

export default React.memo(SelectRating)