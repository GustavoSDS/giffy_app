import React from 'react'

const InputSearchGIF = ({keyword, dispatch}) => {
  return (
    <input
      type="text"
      value={keyword}
      onChange={(e) => { dispatch({type: 'SET_KEYWORD', payload: e.target.value})}}
      placeholder="Search GIF"
    />
  )
}

export default React.memo(InputSearchGIF)