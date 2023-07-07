import React from "react";
import { FormSearch } from "../FormSearch";
import Logo from "../../components/Logo";

import './Header.css'

export const Header = () => {

  return (
    <header>
      <Logo />

      <FormSearch />
      
    </header>
  )
}


export default React.memo(Header);