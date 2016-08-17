import React from 'react'
import Session from '../modules/Session'
import { browserHistory } from 'react-router'

export default React.createClass({
    render(){
        return (
            <div>
                Home
            </div>
        )
    },
    componentWillMount(){
        if(Session.getSession() === false){
            browserHistory.push('/login')
        }
    }
})