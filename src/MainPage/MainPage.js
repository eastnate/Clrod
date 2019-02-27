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

        <p className="main__whatwedo"> What we do </p>
        <div className="main__what">
         
          <div className="main__what__contents">
          <img className="main__what__img" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/1.png?alt=media&token=a46c173f-ace2-49f9-aded-2ed40d62072c" alt="loading.." />
          <p className="main__what__sub__text">Define and do our own work.</p>
          </div>

          <div className="main__what__contents">
          <img className="main__what__img" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/1.png?alt=media&token=a46c173f-ace2-49f9-aded-2ed40d62072c" alt="loading.." />
          <p className="main__what__sub__text">Focus on the essence of our work with a pragmatic, developer-friendly culture.</p>
          </div>

          <div className="main__what__contents">
          <img className="main__what__img" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/3.png?alt=media&token=7c91cdf8-0b5c-40fd-a9af-e1433abbbf9a" alt="loading.." />
          <p className="main__what__sub__text">Create a culture where we can discuss, talk, and solve together.</p>
          </div>

          <div className="main__what__contents">
          <img className="main__what__img" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/5.png?alt=media&token=9984737e-6395-4d6c-86cd-c722cfd6d9fe" alt="loading.." />
          <p className="main__what__sub__text">Flexible commute culture based on individual situations :)</p>
          </div>
        </div>
  
        
      </div>
    </div>
  )


  export default MainPage;