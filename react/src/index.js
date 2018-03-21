import React from 'react';
import ReactDOM from 'react-dom';
import ProfilesContainer from './containers/ProfilesContainer';
import ProfileContainer from './containers/ProfileContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import AppStore from './store/AppStore';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render((
    <Provider store={AppStore}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ProfilesContainer} />
                <Route path='/profile/:id?' component={ProfileContainer} />
            </Switch>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
