import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import SignInAndSignUp from '../pages/SignInAndSignUp';

function Routes(props) {
    return (
        <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/shop" component={ShopPage}></Route>
            <Route path="/signin" component={SignInAndSignUp}></Route>
        </Switch>
    );
}

export default Routes;