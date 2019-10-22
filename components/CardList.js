import React from 'react'
import Link from 'next/link'
import "../public/css/components/Nav.css";
import Card from './Card.js';
import { v4 } from "uuid";


import "../public/css/components/CardList.css";

export default (props) => (
    <div className="my-card-list">
        <ul>
            {(props.items).map(({ label, description, onClick }) => {
                return (
                    <li key={v4()}>
                        <Card label={label} description={description} onClick={onClick}></Card>
                    </li>
                )
            })}}
        </ul>
    </div>
)
