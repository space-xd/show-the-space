import React, { useState } from 'react'
import Link from 'next/link'
import "../public/css/components/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import * as icons from "@fortawesome/free-solid-svg-icons";

const links = [
  { href: 'https://facebook.com', icon: faFacebookSquare, label: 'facebook' },
  { href: 'https://instagram.com', icon: faInstagram, label: 'instagram' },
  { href: 'https://twitter.com', icon: faTwitter, label: 'twitter' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const buttonStyle = {
  fontSize: '30px',
  color: 'white'
}
const fontStyle = {
  fontStyle: 'normal',
  fontWeight: 'bold',
}

const Nav = () => {
  const [sideNav, setSideNav] = useState(true);

  return (
    <div id="grad1" className="my-nav">
      <div id="mySidenav" className={`sidenav ${sideNav ? 'open' : 'close'}`}>
        <div>
          <div id="SPACEXD">
            <span>SPACE</span><span style={fontStyle}>XD</span>
          </div>
          <img src='./earth.png' className='earth-image'></img>
        </div>
        <div id="Group_17">
          <span style={buttonStyle} onClick={(e) => setSideNav(false)}><button type="button" className="btn btn-primary" >Launch Earth</button></span>
        </div>
      </div>
      <FontAwesomeIcon className="logo" icon={icons.faGlobeAmericas} onClick={(e) => setSideNav(true)}></FontAwesomeIcon>
      <ul className="social-icons">
        {links.map(({ key, href, icon }) => (
          <li key={key}>
            <a href={href}>
              <FontAwesomeIcon className="share-icon" icon={icon}></FontAwesomeIcon>
            </a>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default Nav
