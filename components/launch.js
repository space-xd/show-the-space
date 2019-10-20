import React from 'react'
import Globe from './Globe'
import CardList from './CardList'

const Home = () => (
    <div className="my-flex-container">
        <div className="my-flex-item"><CardList></CardList></div>
        <div className="my-flex-item-2"><Globe></Globe></div>
    </div >
)

export default Home
