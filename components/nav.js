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

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, icon }) => (
        <li key={key}>
          <a href={href}>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
