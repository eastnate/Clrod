import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const Header = () => (
  <header>
    <NavLink to="/service" activeClassName="is-active">Service</NavLink>
    <NavLink to="/team" activeClassName="is-active">Team</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
  </header>

)

const MainPage = () => (
  <div>
    This is Main Page :
  </div>
)

const ServicePage = () => (
  <div>
    This is Service Page.
  </div>
)

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
const NotFoundPage = () => (
  <div>
    404! <Link to="/">Go Home</Link>
  </div>
)
 
const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/service" component={ServicePage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)
  
ReactDOM.render(routes, document.getElementById('app'));
  
  