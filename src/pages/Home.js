import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { Layout } from '../components'
import './Home.scss'

const utils = require('../utils')

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
        if (!utils.getCookie('userData')) {
            this.setState({ redirect: true })
        } else {
            const userData = JSON.parse(utils.getCookie('userData'))
            this.setState({ user: userData })
        }
    }

    handleLogout() {
        utils.eraseCookie('userData')
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
                </Layout>
                <button id="logout" onClick={this.handleLogout}>log out</button>
            </div>
        )
    }
}

export default Home