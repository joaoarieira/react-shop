import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import SignInAndSignUp from '../pages/SignInAndSignUp';

function Routes(props) {
    const currentUser = useSelector(state => state.user.currentUser);
    return (
        <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/shop" component={ShopPage}></Route>
            <Route path="/signin" exact>
                {currentUser ? <Redirect to='/' /> : <SignInAndSignUp />}
            </Route>
        </Switch>
    );
}

export default Routes;