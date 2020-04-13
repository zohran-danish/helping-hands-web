import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../LandingPage';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';
import Header from '../Header';
import Dashboard from '../Dashboard';
import PageHeader from '../PageHeader';

const App = () => (
  <Router>
    <PageHeader />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
  </Router>
);


export default App;