import React from 'react'
import Session from '../modules/Session'

export default React.createClass({
    render(){
        if(this.state.loggedIn){
            var msg = "Logado";
        }else{
            var msg = "";
        }

        return (
            <div>
                Home
                <div>{msg}</div>
            </div>
        )
    },
    getInitialState(){
        var sess = new Session();
        if(sess.getSession() === true){
            return {loggedIn: true};
        }

        return {loggedIn: false};
    }
})