import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menuitems } from './Menuitems';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';

class Nav extends Component {
  state = { clicked: false, menuIsOpen: false };

  handelclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    console.log(this.state);
    return (
      <Fragment>
        {/* <!-- navbars************** --> */}

        <div className="container">
          <nav className="d-flex align-items-center justify-content-between section-nav">
            <div className="container-suport">
              <div className="offer"><NavLink to="/offer" className="btn btn-offer">ثبت مناقصه جدید<i className="fa fa-plus"
                aria-hidden="true"></i></NavLink></div>
              <div className="suport">
                <div className="suport-number">
                  <span>تماس با پشتیبان</span>
                  <span>021-2343456</span>
                  <div className="login-container">
                    <NavLink to="/login" className="login">ورود</NavLink><span className="line1">/</span>
                    <NavLink to="/register" className="register">ثبتنام</NavLink>
                    <NavLink to="/register"> <i className="fa fa-user-circle register-icon" aria-hidden="true"></i></NavLink>
                    <span className="line2">/</span>
                    <NavLink to="/login"><i className="fa fa-arrow-left login-icon" aria-hidden="true"></i></NavLink>
                  </div>
                </div>
                <span className='shap-nav'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="67" viewBox="0 0 27 67">
                    <path id="Path_253" data-name="Path 253" d="M74,0H47V67L74,50.566Z"
                      transform="translate(-47)" fill="#125eaa" />
                  </svg>
                </span>
              </div>
            </div>
            {/* menubars *******************/}
            <div className='container-logo'>
              {/* toggle-btn */}
              <div
                className="bar-btn"
                onClick={() => {
                  this.setState({ menuIsOpen: true });
                }}
              >
                <i className="fa fa-bars hamberger"></i>
              </div>
              {/* mrnu */}
              <ul
                className={`menu d-flex navbars  align-items-center justify-content-between p-0 m-0 ${this.state.menuIsOpen ? 'active' : ''}`}
              >
                <div
                  className="times-btn"
                  onClick={() => {
                    this.setState({ menuIsOpen: false });
                  }}
                >
                  <i className="fa fa-times"></i>
                </div>

                <li className="mx-2">
                  <NavLink to="/">صفحه اصلی</NavLink>
                </li>
                <li className="mx-2">
                  <a href="#">شرکت  در یک مناقصه</a>
                </li>
                <li className="mx-2">
                  <a href="#">یافتن یک مناقصه</a>
                </li>
                <li className="mx-2">
                  <a href="#">پرواز</a>
                </li>
                <li className="mx-2">
                  <a href="#">درباره ما</a>
                </li>
                <li className="mx-2">
                  <a href="#">تماس با ما</a>
                </li>
              </ul>
              <div className="logo"><NavLink to="/"> <img src="img/logo.png" alt="" /></NavLink></div>
            </div>
            {/* logo */}

          </nav>
        </div>
      </Fragment>
    );
  }
}
export default Nav;
