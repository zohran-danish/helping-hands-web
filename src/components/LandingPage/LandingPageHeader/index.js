import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../../constants/routes'

const LandingPageHeader = (props) => {
  return (
    <div className="header-container">
      <div className="header-navigation">
        <Link to={ROUTES.HOME}>
          <div className="header-logo">
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="2.491 7.941 196.047 178.112"
              viewBox="2.491 7.941 196.047 178.112"
              height="50"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              data-type="shape"
              role="img"
            >
              <g>
                <path d="M10.968 95.56c-4.65.02-8.438 3.818-8.472 8.467-.231 21.046 7.718 42.171 23.792 58.253 16.049 16.044 37.178 23.993 58.229 23.768 4.654-.029 8.438-3.817 8.472-8.477.226-21.046-7.723-42.17-23.767-58.224-16.073-16.074-37.237-23.993-58.254-23.787zm120.844 23.757c-16.048 16.044-23.997 37.178-23.767 58.224.03 4.66 3.818 8.438 8.473 8.477 21.07.195 42.175-7.723 58.224-23.768 16.068-16.073 23.992-37.178 23.792-58.253-.059-4.679-3.818-8.438-8.472-8.467-21.047-.176-42.147 7.743-58.25 23.787zM70.118 68.386c0 22.72 9.338 43.218 24.398 57.989a8.55 8.55 0 0 0 11.972 0c15.031-14.742 24.394-35.269 24.399-57.989 0-22.72-9.368-43.258-24.399-58a8.55 8.55 0 0 0-11.972 0c-15.031 14.742-24.398 35.28-24.398 58zm0 0"></path>
              </g>
            </svg>
            <div className="logo-text">HELPING HANDS</div>
          </div>
        </Link>
        <div className="navigation">
          <div className="nav-items-container">
            <Link to={ROUTES.SIGN_IN} style={{ textDecoration: 'none' }}>
              <span className="nav-items">ABOUT US</span>
            </Link>
            <Link to={ROUTES.SIGN_IN} style={{ textDecoration: 'none' }}>
              <span className="nav-items">CONTACT US</span>
            </Link>
            <Link to={ROUTES.SIGN_IN} style={{ textDecoration: 'none' }}>
              <span className="nav-items">FAQs</span>
            </Link>
          </div>
          <div className="sign-container">
            <Link to={ROUTES.SIGN_IN} style={{ textDecoration: 'none' }}>
              <div className="signin-nav">LOGIN</div>
            </Link>
            <Link to={ROUTES.SIGN_UP} style={{ textDecoration: 'none' }}>
              <div className="signup-nav">REGISTER</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPageHeader
