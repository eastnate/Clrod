import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss';;


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


const MainPage = () => (
  <div className="main">
    <div className="main__contents">
      <h1 className="main__sentence">
        Creativity grows in an environment where you can enjoy it.
      </h1>
      <p className="main__subsentence">함께 성장 할 수 있는 사람들과 함께, 누구나 성장 할 수 있는 플램폼을 향해</p>

      <Link to="/service">
        <button className="main__button" >Check a service</button>
      </Link>
      <div>
        <img className="main__img" src="resource/oh.png" alt="loading.." />
      </div>
      <p className="main__whatwedo"> What we do </p>
      <div className="main__what">
        <img className="main__what__img" src="resource/1.png" alt="loading.." />
        <img className="main__what__img" src="resource/3.png" alt="loading.." />
        <img className="main__what__img" src="resource/4.png" alt="loading.." />
        <img className="main__what__img" src="resource/5.png" alt="loading.." />
      </div>
      <div className="main__what">
        <p className="main__what__text">&nbsp;&nbsp;Creativity</p>
        <p className="main__what__text">&nbsp;&nbsp;Development</p>
        <p className="main__what__text">Collaboration</p>
        <p className="main__what__text">Commute&nbsp;&nbsp;</p>
      </div>

      <div className="main__what">
        <p className="main__what__sub__text">스스로의 업무를 정의하고 수행하는 사람들의 모여있습니다</p>
        <p className="main__what__sub__text">실용적이고 개발자 친화적인 문화로 일에 본질에만 집중할 수 있습니다</p>
        &nbsp;&nbsp;<p className="main__what__sub__text">밑도 끝도 없이 업무를 던저주는 방식이 아닌, 토의하고 이야기하며 같이 생각해 나가는 문화가 주를 이룹니다</p>
        <p className="main__what__sub__text">탄력적인 출퇴근 문화로, 개인별 상황에 따른 자율출근을 지향합니다.</p>
      </div>
    </div>
  </div>
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

