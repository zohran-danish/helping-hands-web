import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const helpingHandslogo = window.location.orign + '/images/helpingHandslogo.jpeg'

const Navigation = () => (
  <div className="header-navigation">
    <div className="header-logo">
      <Link to={ROUTES.HOME}>
        <img
          src={helpingHandslogo}
          alt="Helping Hands"
          className="app-logo"
          height={80}
          width={150}
        />
      </Link>
    </div>
    <div className="sign-container">
      <Link to={ROUTES.SIGN_IN} style={{textDecoration:'none'}}>
        <span className="signin-nav">Login</span>
      </Link>
      <Link to={ROUTES.SIGN_UP} style={{textDecoration:'none'}}>
        <span className="signup-nav">Register</span>
      </Link>
    </div>
  </div>
)
export default Navigation
