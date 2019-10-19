import React from 'react'
import Link from 'next/link'
import "../public/css/components/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
}
const fontStyle = {
  fontStyle: 'normal',
  fontWeight: 'bold',
}
//faGlobeamericas

const Nav = () => (
  <div id="grad1">
    <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" className="closebtn" onClick={(e) => closeNav(e)}>&times;</a>
      <div>
        <div id="SPACEXD">
          <span>SPACE</span><span style={fontStyle}>XD</span>
        </div>
        <img src='./earth.png' className='earth-image'></img>
      </div>
      <div id="Group_17">
        <span style={buttonStyle} onClick={(e) => closeNav(e)}><button type="button" className="btn btn-primary" >Launch Earth</button></span>
      </div>
    </div>
    <ul>
      {links.map(({ key, href, icon }) => (
        <li key={key}>
          <a href={href}>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
          </a>
        </li>
      ))}
    </ul>
    <span style={buttonStyle} onClick={(e) => openNav(e)}> <img src='./earth.png' className="logo"></img></span>
  </div>
)

function openNav(e) {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav(e) {
  document.getElementById("mySidenav").style.width = "0";
}
export default Nav
