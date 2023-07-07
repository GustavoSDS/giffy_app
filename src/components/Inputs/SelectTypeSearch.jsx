import React from 'react'

const InputTypeSearch = ({ dispatch, category }) => {

  return (
    <select
      onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: e.target.value })}
      name="category"
      id="category"
      value={category}
    >
      <option disabled>Type</option>
      <option value="gifs">Gifs</option>
      <option value="stickers">Stickers</option>
    </select>
  )
}

export default React.memo(InputTypeSearch)
