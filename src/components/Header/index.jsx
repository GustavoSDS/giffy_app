import React from "react";
import { Nav } from "../Nav";

import './Header.css'


export const Header = () => {

  return (
    <header>
      <Nav />      
      <hr />
    </header>
  )
}


export default React.memo(Header);