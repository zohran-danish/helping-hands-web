import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from '../LandingPage'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import HomePage from '../Home'
import * as ROUTES from '../../constants/routes'
import Dashboard from '../Dashboard'
import PageHeader from '../PageHeader'
import AddItems from '../AddItems/AddItems'

const App = () => (
  <Router>
    <PageHeader />
    <Route path={ROUTES.DASHBOARD} component={Dashboard} />
    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route path={ROUTES.HOME} component={HomePage} />
    <Route exact path={ROUTES.LANDING} component={LandingPage} />

    <Route exact path={ROUTES.ADD_ITEM} component={AddItems} />
  </Router>
)

export default App
