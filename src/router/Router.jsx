// Router component
// component which routes application into different pages

import React from 'react';
import {MemoryRouter, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from "history";

import Select from '../pages/select'
import Review from '../pages/review'
import Overview from '../pages/overview'

const history = createMemoryHistory();
function Router() {
  return (<MemoryRouter history={history}>

    <Switch>
      <Route exact={true} path="/">
        <Select/>
      </Route>

      <Route path="/review">
        <Review/>
      </Route>

      <Route path="/overview">
        <Overview/>
      </Route>
    </Switch>
  </MemoryRouter>)

}

export default Router;
