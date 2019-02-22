import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './MainPage.scss'

const MainPage = () => (
    <div className="main">
      <div className="main__contents">
        <h1 className="main__sentence">
          Creativity grows in an environment where you can enjoy it.
        </h1>
        <p className="main__subsentence">Software that Anyone can grow.</p>
  
        <Link to="/service">
          <button className="main__button" >Check a Service</button>
        </Link>
        <div>
          <img className="main__img" src="resource/monster.jpg" alt="loading.." />
        </div>
        <p className="main__whatwedo"> What we do </p>
        <div className="main__what">
          <img className="main__what__img" src="resource/1.png" alt="loading.." />
          <img className="main__what__img" src="resource/3.png" alt="loading.." />
          <img className="main__what__img" src="resource/4.png" alt="loading.." />
          <img className="main__what__img" src="resource/5.png" alt="loading.." />
        </div>
  
        <div className="main__what">
          <p className="main__what__sub__text">We define and do our own work.</p>
          <p className="main__what__sub__text">We focus on the essence of our work with a pragmatic, developer-friendly culture.</p>
          &nbsp;&nbsp;<p className="main__what__sub__text">We're creating a culture where we can discuss, talk, and solve together.</p>
          <p className="main__what__sub__text">We have a flexible commute culture based on individual situations :)</p>
        </div>
      </div>
    </div>
  )


  export default MainPage;