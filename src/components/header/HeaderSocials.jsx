import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http.//github.com" target='_blank'><FaGithubSquare/></a>
        <a href="http.//facebook.com" target='_blank'><FaFacebook/></a>
        <a href="http.//linkedin.com" target='_blank'><FaLinkedin/></a>
    </div>
  )
}

export default HeaderSocials
