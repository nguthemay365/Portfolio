import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
import { useState } from "react";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <header>
      <div className="container header__container">
        <h5>Xin chào, tôi là</h5>
        <h1>Nhật Trường</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA></CTA>
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
