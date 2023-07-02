import React from 'react'

import './Loading.css'

export const Loading = () => {
  return (
    <p className='loading'>
      <span
        className='spinner-loading'
        role="img"
        aria-labelledby="icon"
      />

      Loading, please wait...
    </p>
  )
}
