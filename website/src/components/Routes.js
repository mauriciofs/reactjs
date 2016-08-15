import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Home from './Home'
import Users from './Users'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/users" component={Users}/>
  </Route>
)