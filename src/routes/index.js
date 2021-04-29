import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';

function Routes(props) {
    return (
        <Switch>
            <Route path="/" exact component={HomePage}></Route>
        </Switch>
    );
}

export default Routes;