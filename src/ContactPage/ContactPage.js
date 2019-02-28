import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './ContactPage.scss'


const ContactPage = () => (
  <div className="contact">
    <img className="contact__img" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/contact_banner.jpeg?alt=media&token=00c3044f-48ff-4a7a-a729-d261e4c8093e" alt="loading.." />
    <p className="contact__text">Contact !</p>
    <h3 className="contact__title">Connect With Us</h3>
    
    <div className="contact__contents">

      <div className="contact__content">
        <img className="contact__email" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/email.png?alt=media&token=2d1bf0f0-9104-4801-84b4-17d90afdf5b9" alt="loading.." />
        <button className="contact__button" >E-Mail</button>
      </div>

      <div className="contact__content">
      <img className="contact__location" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/location.png?alt=media&token=29d61bd2-1192-4e72-9518-1ca288c01ef3" alt="loading.." />
      <button className="contact__button" >Location</button>
      </div>
    </div>
  </div>
)


export default ContactPage