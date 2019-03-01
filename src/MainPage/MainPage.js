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

      <img className="main__img" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/main.jpeg?alt=media&token=83b1cd2c-d466-4431-9f2c-c8b8c60da3f2" alt="loading.." />

      <p className="main__whatwedo"> THE MAJANG-DONG BEST GRAPHICS SOFTWARE EXPERIENCES </p>

      <div className="main__what">
        <div className="main__what__contents">
          <div className="main__what__img">
            <i class="fas fa-kiwi-bird icon"></i>
          </div>
          <p className="main__what__sub__text">Define and do our own work.</p>
        </div>

        <div className="main__what__contents">
          <div className="main__what__img">
            <i class="fas fa-code-branch icon"></i>
          </div>
          <p className="main__what__sub__text">Focus on the essence of our work with a developer-friendly culture.</p>
        </div>

        <div className="main__what__contents">
          <div className="main__what__img">
            <i class="fas fa-comments icon"></i>
          </div>

          <p className="main__what__sub__text">Create a culture where we can discuss, talk, and solve together.</p>
        </div>

        <div className="main__what__contents">
          <div className="main__what__img">
            <i class="fas fa-rocket icon"></i>
          </div>
          <p className="main__what__sub__text">Flexible commute culture based on individual situations</p>
        </div>
      </div>
    </div>
  </div>
)

export default MainPage;