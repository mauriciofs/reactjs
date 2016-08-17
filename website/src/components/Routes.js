import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Home from './Home'
import Users from './Users'
import Login from './Login'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/users" component={Users}/>
  </Route>
)