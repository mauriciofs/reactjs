import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render(){
        return (
            <div>
                Navigation
                <ul role="nav">
                    <li><Link to="/home" activeClassName="active" onlyActiveOnIndex>Home</Link></li>
                    <li><Link to="/users" activeClassName="active">Users</Link></li>
                </ul>
            </div>
        )      
    }
})