import React from 'react'

const InputSearchGIF = ({keyword, setKeyword}) => {
  return (
    <input
      type="text"
      value={keyword}
      onChange={(e) => { setKeyword(e.target.value) }}
      placeholder="Search GIF"
    />
  )
}

export default InputSearchGIF