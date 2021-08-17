import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Login.scss'

import LoadingSpinner from '../components/LoadingSpinner/'

const utils = require('../utils')

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirect: false,
            loading: false
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleGoRegister = this.handleGoRegister.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentWillMount() {
        if (utils.getCookie('userData')) {
            this.setState({ redirect: true })
        }
    }

    async handleLogin() {
        if(this.state.email && this.state.password) {
            this.setState({ loading: true })
            const settings = {
                method: 'POST',
                headers: {
                    mode: 'no-cors',
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mail: this.state.email,
                    pass: this.state.password
                })
            };
            const response = await fetch(`${getServerUrl().REACT_APP_API_URL}/loginUser`, settings)
            const userData = await response.json()
            
            if (!userData.user) {
                console.log('error when logging in')
            } else {
                console.log(userData.user)
                utils.setCookie('userData', JSON.stringify(userData.user), 60) // 60 days expiration
                this.setState({ redirect: true })
            }
            this.setState({ loading: false })
        }
    }

    handleGoRegister() {
        this.props.history.push('/register')
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        if (this.state.redirect) {
            return(<Redirect to={'/'}/>)
        }

        return (
            <div className="Login">
                <h1>Login</h1>
                <div className="form">
                    <div className="inputs">
                        <div className="form__group field">
                            <input className="form__field" type="email" id="email" name="email" placeholder="test@example.com" onChange={this.onChange}/>
                            <label className="form__label" htmlFor="email">Email</label>
                        </div>
                        <div className="form__group field field">
                            <input className="form__field" type="password" id="password" name="password" placeholder="******" onChange={this.onChange}/>
                            <label className="form__label" htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="button" id="login" type="submit" onClick={this.handleLogin}>
                            <span>Login</span>
                        </button>
                        <button className="button" id="register" onClick={this.handleGoRegister}>
                            <span>Register</span>
                        </button>
                    </div>
                    {this.state.loading && <LoadingSpinner/>}
                </div>
            </div>
        )
    }
}

export default Login