import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './layouts/MainLayout/MainLayout';
import HomePage from './containers/HomePage/HomePage';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
import LoginPage from './containers/LoginPage/LoginPage';
import MessagePage from './containers/MessagePage/MessagePage';
import CarPage from './containers/CarListPage/CarPage';
import TripPage from './containers/TripListPage/TripPage';
import InformationPage from './containers/InfomationPage/InfomationPage';
import CarEditPage from './containers/CarEditPage/CarEditPage';
import CarListPage from './containers/CarListPage/CarListPage';
import TripListPage from './containers/TripListPage/TripListPage';
import HistoryPage from './containers/HistoryPage/HistoryPage';
import HistoryDetail from './containers/HistoryPage/HistoryDetail';
import BookCarPage from './containers/BookCarPage/BookCarPage';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) =>
  <Route {...rest} render={props => isAuthenticated ? <Component {...rest} /> : <Redirect to='/login' />} />;

export default function router({ isAuthenticated }) {
  return (
    <BrowserRouter >
      <Switch>
        <Route path='/login' exact component={LoginPage} isAuthenticated={isAuthenticated} />
        <MainLayout>
          <Switch>
            <PrivateRoute path='/' exact component={HomePage} isAuthenticated={isAuthenticated} />
            <PrivateRoute path='/messages' component={MessagePage} isAuthenticated={isAuthenticated} />

            <PrivateRoute path='/car' component={CarPage} isAuthenticated={isAuthenticated} />
            <PrivateRoute path='/trip' component={TripPage} isAuthenticated={isAuthenticated} />

            <PrivateRoute path='/information' component={InformationPage} isAuthenticated={isAuthenticated} />

            <PrivateRoute path='/car-list' component={CarListPage} isAuthenticated={isAuthenticated} />
            <PrivateRoute path='/trip-list' component={TripListPage} isAuthenticated={isAuthenticated} />

            <PrivateRoute path='/car-edit' component={CarEditPage} isAuthenticated={isAuthenticated} />


            <PrivateRoute path="/history" component={HistoryPage} isAuthenticated={isAuthenticated} />
            <PrivateRoute path="/history-detail" component={HistoryDetail} isAuthenticated={isAuthenticated} />

            <PrivateRoute path="/book" component={BookCarPage} isAuthenticated={isAuthenticated} />

            <Route component={NotFoundPage} />
          </Switch>
        </MainLayout>
      </Switch>
    </BrowserRouter>
  );
}