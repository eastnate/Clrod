import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './TeamPage.scss'

const TeamPage = () => (

  <div className="team">

    <img className="team__image" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/team_banner.jpeg?alt=media&token=d070f814-2715-494c-8c05-fa0c45223f91" alt="loading.." />
    <p className="team__text">Go Clrod. </p>
    <p className="team__text__sub">
    Our differences unite us
    </p>
  
    <h3 className="team__title">About Us</h3>

    <div className="team__contents">
      <p className="team__contents__text">
      클로드는 2019년에 최진우, 엄승탁 2인이 모여 결성한 팀이다.
      <br/> <br/>
      Web, Renderer, Graphics 등의 작업을 하는 클로드의 키워드는 '성장' 이다.
      <br/> <br/>
      클로드는 누구든지 성장할 수 있다고 믿고, 그 가치를 그래픽 소프트웨어를 통해 대중들에게 전달하려 한다.
      </p>
      <p className="team__contents__text__last">Clrod</p>
    </div>
    <h3 className="team__title">Members
    </h3>
    <div className="team__photos">
    <div>
      <img className="team__photos__image" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/jw.jpeg?alt=media&token=96da0ec4-1ff1-4004-8b4b-ad6fcfb8730a" alt="loading.." />
      <p className="team__photos__text">Backsoo(27)</p>
      </div>
      <div>
      <img className="team__photos__image" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/st.jpeg?alt=media&token=94fd3970-2ab1-48d6-a2c2-52df9abe00e1" alt="loading.." />
      <p className="team__photos__text">Otaku(27)</p>
      </div>
      <div>
      <img className="team__photos__image" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/cat.jpeg?alt=media&token=0918de7d-16cc-4565-abcf-7b25fd7ecd1a" alt="loading.." />
      <p className="team__photos__text" >Developer(3)</p>
      </div>
    </div>
  </div>
)

export default TeamPage