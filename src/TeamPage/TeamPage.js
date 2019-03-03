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
    We are waiting for a great colleague.
    </p>
  
    <h3 className="team__title">About Us</h3>

    <div className="team__contents">
      <p className="team__contents__text">

      We know the power that comes from people who share the same vision. Many people have started cafes and convenience stores, and now the chicken houses are operated without closing down. We thought that there might be one more startup with a developer's vision.
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
      <img className="team__photos__image" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/jw.jpeg?alt=media&token=96da0ec4-1ff1-4004-8b4b-ad6fcfb8730a" alt="loading.." />
      <p className="team__photos__text">backsoo(27)</p>
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