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


const Nav = () => {
  return (
    <div  className="my-nav grad1">
      <a href="/">
        <span>
          <FontAwesomeIcon className="logo" icon={icons.faGlobeAmericas}></FontAwesomeIcon>
        </span>
      </a>
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
