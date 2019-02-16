import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const Header = () => (

  <header className="header">
    <div className="navbar">
      <div className="left">
        <NavLink className="header__left__li" to="/" activeClassName="is-active">
          <img className="header__img" src="resource/logo.png" alt="logo" />
        </NavLink>
        <NavLink className="header__left__li" to="/" activeClassName="is-active">
          <div className="header__name">Clrod!</div>
        </NavLink>
      </div>
      <div className="right">
        <NavLink className="header__right__li" to="/service" activeClassName="is-active">Service</NavLink>
        <NavLink className="header__right__li" to="/team" activeClassName="is-active">Team</NavLink>
        <NavLink className="header__right__li" to="/contact" activeClassName="is-active">Contact</NavLink>
      </div>
    </div>
  </header>

)

const MainPage = () => (
  <div className="main">
    This is Main Page :
  </div>
)

const ServicePage = () => (
  <div className="main">
      This is Service Page.
  </div>
)

const TeamPage= () => (
  <div className="main">
        This is Team Page.
  </div>
)

const ContactPage= () => (
  <div className="main">
      This is Contact Page.
  </div>
)

const NotFoundPage = () => (
  <h1>
    404! <Link to="/">Go Home</Link>
  </h1>
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
  
  