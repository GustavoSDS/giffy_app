import React from 'react'
import error404 from '../../assets/errorr404.jpg'

import './Error.css'

export const Error = () => {
  return (
    <p className='error'>
      <span
        role="img"
        aria-labelledby="icon"
        className='error-spinner'
      />
      <img src={error404} alt="error-404" />
    </p>
  )
}

export default React.memo(Error)