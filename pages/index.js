import AppLayout from "../components/AppLayout";
import React from 'react'
import "../public/css/pages/index.css";

const Home = () => (
    <AppLayout title="SpaceXD">
        <div className='Home grad1'>
            <div className="content">
                <h1>SPACE<strong>XD</strong></h1>
                <p>
                    Written in JavaScript, Web WorldWind enables web page and application builders to quickly create interactive visualizations of geographic information on an interactive 3D globe or 2D map.
                </p>
                <a href="/App" className="launch-btn" >Launch Earth</a>
            </div>
            <img src='./earth.png' className='earth-image'></img>
        </div>
    </AppLayout>
);
export default Home;