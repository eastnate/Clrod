import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const Header = () => (

  <header className="header">
    <div className="navbar">
      <div className="left">
        <NavLink className="header__left__li" to="/">
          <img className="header__img" src="resource/logo.png" alt="logo" />
        </NavLink>
        <NavLink className="header__left__li" to="/">
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
    <div className="main__contents">
      <h1 className="main__sentence">
      Creativity grows in an environment where you can enjoy it.
      </h1>
      <p className="main__subsentence">함께 성장 할 수 있는 사람들과 함께, 누구나 성장 할 수 있는 플램폼을 향해</p>
      <button className="main__button">Check a service</button>
      <div>
        <img className="main__img" src="resource/monster.jpg" alt="loading.." />
      </div>
      <p className="main__whatwedo"> What we do </p>
      <div className="main__what">
        <img className="main__what__img" src="resource/1.png" alt="loading.." />
        <img className="main__what__img" src="resource/2.png" alt="loading.." />
        <img className="main__what__img" src="resource/3.png" alt="loading.." />
        <img className="main__what__img" src="resource/4.png" alt="loading.." />
        <img className="main__what__img" src="resource/5.png" alt="loading.." />
      </div>
      <div className="main__what">
        <p className="main__what__text">개발</p>
        <p className="main__what__text">휴식</p>
        <p className="main__what__text">창조</p>
        <p className="main__what__text">협업</p>
        <p className="main__what__text">출퇴근</p>
      </div>

      <div>
        <img src="resource/roz.jpg" alt="loading.." />
        <p>asdf</p>
      </div>
    </div>
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
  
  