import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PublicRoute } from './PublicRoute';
import Movies from '../component/Movies';
import PageNotFound from '../component/PageNotFound';
import LoginPage from '../component/LoginPage';
import Header from '../component/Header';

export const history = createBrowserHistory();

const AppRouter = () =>(
    <Router history={history}>
        <div>
            {history.location.pathname!='/login' && <Header />}
            <Switch>
                <PublicRoute path='/' component={Movies} exact={true} />
                <PublicRoute path='/login' component={LoginPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
