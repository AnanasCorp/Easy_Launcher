import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { Layout } from '../components'
import logo from '../img/logo.svg';

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
                <Layout>
                    <h1>Home</h1>
                    <p>welcome {this.state.user.displayName}</p>
                    <button id="logout" onClick={this.handleLogout}>log out</button>
                </Layout>
            </div>
        )
    }
}

export default Home