import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import MainPage from './MainPage/Mainpage.js'
import ServicePage from './ServicePage/ServicePage.js'
import AboutPage from './AboutPage/AboutPage.js'
import ContactPage from './ContactPage/ContactPage.js'
import $ from 'jquery';


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
          <div className="header__name">Clrod</div>
        </NavLink>
      </div>





      <div className="right">
        <NavLink className="header__right__li" to="/about" activeClassName="is-active">About</NavLink>
        <NavLink className="header__right__li" to="/service" activeClassName="is-active">Service</NavLink>
        <NavLink className="header__right__li" to="/contact" activeClassName="is-active">Contact</NavLink>
        <NavLink className="main__button" to="#" activeClassName="is-active">Blog</NavLink>
      </div>
    </div>

    <div className="navbar__mobile">
      <div className="left">
        <NavLink className="header__left__li" to="/">
          <div className="header__name">Clrod</div>
        </NavLink>
      </div>
      <div className="right">
        <div class="mobile-menu-btn"><span></span></div>
      </div>
    </div>

    <nav className="mobile__nav">
      <NavLink className="mobile__link" to="/about">About</NavLink>
      <NavLink className="mobile__link" to="/service" >Service</NavLink>
      <NavLink className="mobile__link" to="/contact">Contact</NavLink>
      <NavLink className="mobile__link" to="#" >Blog</NavLink>
    </nav>
  </header>
)


const Footer = () => (
  <footer className="footer">
    <p className="footer__text"> © 2019 Clrod, Inc </p>
    <p className="footer__text"> 23, Majo-ro 15ga-gil, Seongdong-gu, Seoul, Republic of Korea </p>
    <p className="footer__text"> Tel : 010-0000-00 | Fax : 02-493-9569 </p>
  </footer>
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
          <Route path="/about" component={AboutPage} />
          <Route path="/service" component={ServicePage} />
          <Route path="/contact" component={ContactPage} />
        </ScrollToTop>
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)


ReactDOM.render(routes, document.getElementById('app'));

// Animation menu icon & mobile menu bar
$('.mobile-menu-btn').click(function () {
  $('.mobile-menu-btn').toggleClass('open');
  $('.mobile__nav').slideToggle(200);
});

