import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './ServicePage.scss'


const ServicePage = () => (
  <div className="service">

    <h3 className="service__app__text">APP</h3>
    <div className="service__app">
      <figure className="service__app__cosm">
        <img className="service__app__cosm__logo" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/ComicStackLogo.png?alt=media&token=47da8719-e952-4c6b-b9b0-dcb871d3ec79" alt="loading.." />
        <figcaption>코믹스택 모바일</figcaption>
      </figure>

      <figure className="service__app__cosd">
        <img className="service__app__cosd__logo" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/ComicStackLogo.png?alt=media&token=47da8719-e952-4c6b-b9b0-dcb871d3ec79" alt="loading.." />
        <figcaption>코믹스택 데스크탑</figcaption>
      </figure>
    </div>


    <h3 className="service__community__text">COMMUNITY</h3>
    <div className="service__community">

      <figure className="service__community__velbi">
        <img className="service__community__velbi__logo" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/VelbiLogo.png?alt=media&token=236ed0a8-b82b-4387-ba20-fec8da94cc6d" alt="loading.." />
        <figcaption>커뮤니티 벨비</figcaption>
      </figure>

      <figure className="service__community__solla">
        <img className="service__community__solla__logo" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/SollaLogo.png?alt=media&token=a8fdb71e-f97c-4ccf-b16c-789ba1ec9c7b" alt="loading.." />
        <figcaption>커뮤니티 솔라</figcaption>
      </figure>
    </div>
  </div>
)


export default ServicePage;