import React from 'react'
import { Link } from 'wouter'
import './Category.css'

const index = ({ name, options = [] }) => {
  return (
    <div className='category'>
      <h3>{name}</h3>
      <ul>
        {
          options.map(option => (
            <li key={option}>
              <Link to={`/gifs/${option}`}>{option}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default index