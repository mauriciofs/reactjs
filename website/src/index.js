import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App';
import Routes from './components/Routes'

ReactDOM.render(
    <Router routes={Routes} history={browserHistory}/>,
    document.getElementById('content')
);