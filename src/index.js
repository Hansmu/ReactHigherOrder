import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import requireAuth from './components/require_authentication';
import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//Could've put requireAuth into Resources instead if you would've expected every instance of the Resources class to have needed requireAuth.
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="resources" component={requireAuth(Resources)} />
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

//Higher order component
//Is a React component that gives extra functionality to a regular component. We get a enchanced/composed component. We're adding additional functionality.
//Connect is a higher order component.

//Provider wraps our Redux Store, the library that holds our actual state. Watches the Redux store directly. Tell the Provider whenever the state changes.
//Provider broadcasts to every connected component that there has been a change, do whatever you want with it.
//Connect() is a higher order component that is making direct communication with the Provider. Provider is what has access to the store.
