import React from 'react'

import './Error.css'

export const Error = () => {
  return (
    <p className='error'>
      <span
        role="img"
        aria-labelledby="icon"
        className='error-spinner'
      />
      Oops! Something went wrong.{/* Sorry, no results */}
    </p>
  )
}
