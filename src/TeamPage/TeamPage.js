import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './TeamPage.scss'
//클로드는 항상 글로벌 시장을 목표로 하며, 성장을 해왔습니다.
//앞으로 펼쳐질 클로드의 성장 스토리를 함께 그려나갈 훌륭한 동료를 기다립니다.
// 저희는 같은 비전을 품은 사람들이 모였을 나오는 힘을 알고 있습니다.
// 국내 많은 사람들이 카페와 편의점을 창업했고, 지금도 치킨집들이 망하지 않고 운영되고 있습니다. 
// 개발자의 비전을 품은 IT회사 하나 정도 더 있어도 될 것 같다는 생각이 들었습니다. 
// 그래서 개발자들의 놀이터인 클로드를 만들었습니다.
// 대단한걸 하기 보다, 꾸준히 발전해서 마장동을 대표하는 IT회사가 되고 싶습니다.
// 클로드는 누구나 성장할수 있다고 생각합니다. 자신의 맞는 습관, 환경이 존재한다면 말이죠.
// 한계가 존재하면 다른방식으로 뛰어넘으면 됩니다.
// 사용자들에게도 이런 가치를 전달하고 싶습니다.
const TeamPage = () => (

  <div className="team">

    <img className="team__image" src="resource/team3.png" alt="loading.." />
    <p className="team__text">Go Clrod. </p>
    <p className="team__text__sub">
    We are waiting for a great colleague.
    </p>
  
    <h3 className="team__title">Our Story</h3>

    <div className="team__contents">
      <p className="team__contents__text">

      We know the power that comes from people who share the same vision. Many people have started cafes and convenience stores, and now the chicken houses are operated without closing down. We thought that there might be one more startup with a developer's vision.
      <img className="team__contents__image" src="resource/google.jpg" alt="loading.." />
      <br/><br/>
So We created Clrod, a dev playground. We want to be an IT company that represents majang-dong by steadily growing rather than doing great things that change the world.
<br/><br/>
Clrod thinks that anyone can grow. If there is a proper habit and environment. If there is a limit, you can bypass it in a different way. We want to give this value to users.

      </p>
    </div>
    <h3 className="team__title">Members
    </h3>
    <div className="team__photos">
    <div>
      <img className="team__photos__image" src="resource/jw.png" alt="loading.." />
      <p className="team__photos__text">backsoo(27)</p>
      </div>
      <div>
      <img className="team__photos__image" src="resource/st.png" alt="loading.." />
      <p className="team__photos__text">Otaku(27)</p>
      </div>
      <div>
      <img className="team__photos__image" src="resource/cat.jpg" alt="loading.." />
      <p className="team__photos__text" >Developer(3)</p>
      </div>
    </div>
  </div>
)

export default TeamPage