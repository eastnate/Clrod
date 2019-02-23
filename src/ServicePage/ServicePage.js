import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './ServicePage.scss'

const ServicePage = () => (
    <div className="service">

      <div className = 'main__div'>
        <div>Velbi.io</div>
        <p>벨비는 어쩌구 저쩌구 입니다.</p>
      </div>
        
      <div className = 'main__div'>
        <div>comicstack</div>
        <p>코스는 어쩌구 저쩌구 입니다. </p>
      </div>

      <div className = 'main__div'>
        <div>cudi.io</div>
        <p>쿠디는 어쩌구 저쩌구 입니다. </p>
      </div>

      <div className = 'main__div'>
        <div>solla.io</div>
        <p>솔라는 어쩌구 저쩌구 입니다. </p>
      </div>

      <div className = 'main__div'>
        <div>Oceangray</div>
        <p>오션그레이는 어쩌구 저쩌구 입니다. </p>
      </div>
    </div>
  )


export default ServicePage;