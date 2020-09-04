import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import '../scss/Home.scss';

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
            <div>
                <header className="flex justify-end">
                    <p>{this.state.user.displayName}</p> 
                    <button id="logout" onClick={this.handleLogout}>log out</button>
                </header>
                <div className="Home">
                    <h1>Home</h1>
                </div>
            </div>
        )
    }
}

export default Home