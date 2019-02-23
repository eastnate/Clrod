import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './ContactPage.scss'


const ContactPage = () => (
  <div className="contact">
  <img className="contact__image" src="resource/team.png" alt="loading.." />

      <p className="contact__text">Contact ! </p>


  <h3 className="contact__title">Connect With Us</h3>
    <div className="contact__contents">

      <img className="contact__email" src="resource/email.png" alt="loading.." />
      <img className="contact__location" src="resource/location.png" alt="loading.." />
    </div>
    <div className="contact__buttons">
      <button className="contact__button" >E-Mail</button>
      <button className="contact__button" >Location</button>
    </div>



  </div>
)


export default ContactPage