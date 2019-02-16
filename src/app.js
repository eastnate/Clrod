import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const Header = () => (

    <header className="header">
        <NavLink className="header__li__left" to="/" activeClassName="is-active">
          <img className="header_img" src="resource/logo.png" alt="logo" />
        </NavLink>
        <NavLink className="header__li__left" to="/" activeClassName="is-active">
          <div className="header__name">Clrod</div>
        </NavLink>
        <NavLink className="header__li" to="/service" activeClassName="is-active">Service</NavLink>
        <NavLink className="header__li" to="/team" activeClassName="is-active">Team</NavLink>
        <NavLink className="header__li" to="/contact" activeClassName="is-active">Contact</NavLink>
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
  
  