import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Identity Developer</title>
        <meta property="og:title" content="Direct Identity Developer" />
      </Helmet>
    </div>
  )
}

export default Home
