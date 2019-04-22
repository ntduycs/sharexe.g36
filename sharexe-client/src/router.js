import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './layouts/MainLayout/MainLayout';
import HomePage from './containers/HomePage/HomePage';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
import LoginPage from './containers/LoginPage/LoginPage';
import MessagePage from './containers/MessagePage/MessagePage';
import CarPage from './containers/CarPage/CarPage';

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
                        <PrivateRoute path='/car' component={CarPage} isAuthenticated={isAuthenticated}/>
                        <Route component={NotFoundPage} />
                    </Switch>
                </MainLayout>
            </Switch>
        </BrowserRouter>
    );
}