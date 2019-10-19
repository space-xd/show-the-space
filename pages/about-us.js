import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Alert from "../components/alert";

const Home = () => (
  <div>
    <Head>
      <title>About us</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />
      <Alert></Alert>
  </div>
)

export default Home
