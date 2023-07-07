import React from 'react'
import { Link } from 'wouter'
import './Category.css'

const Category = ({ name, options = [] }) => {

  return (
    <div className='category'>
      <h3>{name}</h3>
      <ul>
        {
          options.map(option => (
            <li key={option}>
              <Link to={`/gifs/${option}/g`}>{option}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Category