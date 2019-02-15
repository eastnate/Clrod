import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const MainPage = () => (
    <div>
      This is Main Page :
    </div>
  );
  
  const ServicePage = () => (
    <div>
      This is Service Page.
    </div>
  );

  const TeamPage= () => (
      <div>
        This is Team Page.
      </div>
  )

  const ContactPage= () => (
    <div>
      This is Contact Page.
    </div>
)
  
  const routes = (
    <BrowserRouter>
      <div>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/service" component={ServicePage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/contact" component={ContactPage} />
      </div>
    </BrowserRouter>
  );
  
  ReactDOM.render(routes, document.getElementById('app'));
  
  