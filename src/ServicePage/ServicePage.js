import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './ServicePage.scss'

const ServicePage = () => (
  <div className="service">

    <img className="service__image" src="https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/service_banner.jpeg?alt=media&token=5c1fdb5f-88e4-43df-9ae4-28b747e26430" alt="loading.." />
    <p className="service__text">Beyond. </p>
    <p className="service__text__sub">Clrod has always been growing in the global market.</p>
    <h3 className="service__title">Service</h3>
    <div className="service_contents">
      <figure className="snip1321"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample26.jpg" alt="sq-sample26" />
        <figcaption><i className="ion-upload"></i>
          <h4>Velbi.io</h4>
          <h2>벨비</h2>
        </figcaption><a href="#"></a>
      </figure>

      <figure className="snip1321"><img src='https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/serviceA.jpeg?alt=media&token=ddec84f1-8289-4ddc-be54-27bdc206505d' alt="sq-sample28" />
        <figcaption><i className="ion-share"></i>
          <h4>ComicStack</h4>
          <h2>코스</h2>
        </figcaption><a href="#"></a>
      </figure>


      <figure className="snip1321"><img src='https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/serviceB.jpeg?alt=media&token=155258ab-ebcf-42df-86cf-034364fd586c' alt="sq-sample26" />
        <figcaption><i className="ion-upload"></i>
          <h4>Cudi    </h4>
          <h2>쿠디</h2>
        </figcaption><a href="#"></a>
      </figure>


      <figure className="snip1321"><img src='https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/serviceC.jpeg?alt=media&token=4b5a8909-b93f-4b6b-8894-f9f0583a9095' alt="sq-sample26" />
        <figcaption><i className="ion-upload"></i>
          <h4>Solla    </h4>
          <h2>솔라</h2>
        </figcaption><a href="#"></a>
      </figure>

      <figure className="snip1321"><img src='https://firebasestorage.googleapis.com/v0/b/clrod-bc004.appspot.com/o/serviceC.jpeg?alt=media&token=4b5a8909-b93f-4b6b-8894-f9f0583a9095' alt="sq-sample26" />
        <figcaption><i className="ion-upload"></i>
          <h4>Clrod Renderer</h4>
          <h2>렌더머신</h2>
        </figcaption><a href="#"></a>
      </figure>
    </div>
  </div>
)


export default ServicePage;