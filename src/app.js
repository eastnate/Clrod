import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import MainPage from './Mainpage.js'


class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}


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

const Footer = () => (
  <footer className="footer">
    <p className="footer__text"> © 2019 grepp, Inc</p>
    <p className="footer__text">주소 : 서울특별시 성동구 마조로 15가길 23</p>
    <p className="footer__text">
      23, Majo-ro 15ga-gil, Seongdong-gu, Seoul, Republic of Korea</p>
    <p className="footer__text">
      Tel : 010-4936-9569 | Fax : 02-493-9569 </p>
  </footer>
)


const ServicePage = () => (
  <div className="main">
    This is Service Page.
  </div>
)

const TeamPage = () => (
  <div className="main">
    This is Team Page.
  </div>
)

const ContactPage = () => (
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
      <ScrollToTop>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/service" component={ServicePage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/contact" component={ContactPage} />
        </ScrollToTop>
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));

