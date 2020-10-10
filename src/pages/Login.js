import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import LoadingSpinner from '../components/LoadingSpinner/'

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
        if (sessionStorage.getItem('userData')) {
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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/loginUser`, settings)
            const userData = await response.json()
            
            if (!userData.user) {
                console.log('error when logging in')
            } else {
                console.log(userData.user)
                sessionStorage.setItem('userData', JSON.stringify(userData.user))
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
                        <div className="field">
                            <label htmlFor="email">email</label>
                            <input type="email" id="email" name="email" placeholder="test@example.com" onChange={this.onChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="password">password</label>
                            <input type="password" id="password" name="password" placeholder="******" onChange={this.onChange}/>
                        </div>
                    </div>
                    <button id="login" type="submit" onClick={this.handleLogin}>Login</button>
                    <button id="register" onClick={this.handleGoRegister}>Register</button>
                    {this.state.loading && <LoadingSpinner/>}
                </div>
            </div>
        )
    }
}

export default Login