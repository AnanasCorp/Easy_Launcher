import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import logo from '../logo.svg';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
    }

    componentWillMount() {
        sessionStorage.getItem('userData') ?
            console.log('is ok') :
            this.setState({ redirect: true })
    }

    render() {
        if(this.state.redirect) {
            return(<Redirect to={'/login'}/>)
        }

        return(
            <div className="Home">
                <h1>home</h1>
                <img src={logo} alt="logo"/>
            </div>
        )
    }
}

export default Home