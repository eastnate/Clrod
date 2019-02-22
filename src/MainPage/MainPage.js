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
          <p className="main__what__sub__text">스스로의 업무를 정의하고 수행하는 사람들의 모여있습니다</p>
          <p className="main__what__sub__text">실용적이고 개발자 친화적인 문화로 일에 본질에만 집중할 수 있습니다</p>
          &nbsp;&nbsp;<p className="main__what__sub__text"> 토의하고 이야기하며 같이 해결해 나가는 문화를 느낄수있습니다.</p>
          <p className="main__what__sub__text">탄력적인 출퇴근 문화로, 개인별 상황에 따른 자율출근을 합니다</p>
        </div>
      </div>
    </div>
  )


  export default MainPage;