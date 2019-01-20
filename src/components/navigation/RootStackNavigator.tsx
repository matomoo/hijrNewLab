import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

import Intro from '../screen/Intro';
import NotFound from '../screen/NotFound';
import Login from '../screen/Authee/Login';

@inject('store')
class RootStackNavigator extends Component<any> {
  public componentDidMount() {
    // console.log(`userLang: ${this.props.store.locale.LANG}`);
  }

  public render() {
    return (
      <BrowserRouter>
        <div style={{ textAlign: 'center' }}>
          <Switch>
            <Route exact={true} path='/' component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RootStackNavigator;
