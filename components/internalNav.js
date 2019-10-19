import React from 'react'
import Link from 'next/link'
import "../public/css/components/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Card from './card.js';

//faGlobeamericas

const InternalNav = () => (
    <div id="internalNav" >
        <table class="table">
            <tbody>
                <tr>
                    <Card />
                </tr>
                <tr>
                    <Card />
                </tr>
                <tr>
                    <Card />
                </tr>
                <tr>
                    <Card />
                </tr>
                <tr>
                    <Card />
                </tr>
            </tbody>
        </table>
    </div>
)

export default InternalNav
