import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/App';
import Routes from './components/Routes'

ReactDOM.render(
    <Router routes={Routes} history={hashHistory}/>,
    document.getElementById('content')
);