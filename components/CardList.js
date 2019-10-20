import React from 'react'
import Link from 'next/link'
import "../public/css/components/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Card from './Card.js';
import { v4 } from "uuid";

import "../public/css/components/CardList.css";
//faGlobeamericas
const icons = [
    { label: 'Fire', image: "/Image_8.png" },
    { label: 'Ash Plumes', image: "/Image_4.png" },
    { label: 'Drought', image: "/Image_5.png" },
    { label: 'Dust Strome', image: "/Image_7.png" },
    { label: 'Floods', image: "/Image_9.png" },
    { label: 'Severe Strome', image: "/Image_10.png" },
    { label: 'Smoke Plumes', image: "/Image_11.png" },
];

export default (props) => (
    <div className="my-card-list">
        <ul>
            {(props.items || icons).map(({ label, image }) => (
                <li key={v4()}>
                    <Card label={label} image={image}></Card>
                </li>
            ))}
        </ul>
    </div>
)
