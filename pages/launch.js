import React from 'react'
import Globe from '../components/Globe'
import InternalNav from '../components/internalNav'

const Home = () => (
    <div id="main-globe">
        <div className="internalNav"><InternalNav></InternalNav></div>
        <div><Globe></Globe></div>
    </div>
)

export default Home
