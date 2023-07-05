import React from 'react'
import { Link } from 'wouter'
import logo from '../../assets/logo.svg';

const Logo = () => {
  return (
    <Link className="logo-container" to="/">
      <img src={logo} alt="logo" />
      <h1 className="logo">Giffy App</h1>
    </Link>
  )
}

export default Logo;