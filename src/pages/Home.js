import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import logo from '../logo.svg';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            redirect: false
        }
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentWillMount() {
        if (!sessionStorage.getItem('userData')) {
            this.setState({ redirect: true })
        } else {
            const userData = JSON.parse(sessionStorage.getItem('userData'))
            this.setState({ user: userData })
        }
    }

    handleLogout() {
        sessionStorage.removeItem('userData')
        this.setState({ redirect: true })
    }

    render() {
        if(this.state.redirect) {
            return(<Redirect to={'/login'}/>)
        }

        return(
            <div className="Home">
                <h1>home, welcome {this.state.user.uid}</h1>
                <img src={logo} alt="logo"/>
                <button id="logout" onClick={this.handleLogout}>log out</button>
            </div>
        )
    }
}

export default Home